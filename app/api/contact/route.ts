// API route (App Router) — validates form data and forwards to Google Apps Script
import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  template: string;
  role?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error('[contact] GOOGLE_SCRIPT_URL is not set');
    return NextResponse.json({ error: 'GOOGLE_SCRIPT_URL is not configured' }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }

  const { name, email, template } = payload;
  if (!name || !email || !template) {
    return NextResponse.json({ error: '이름, 이메일, 템플릿은 필수입니다.' }, { status: 400 });
  }

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        template,
        role:    payload.role ?? '',
        message: payload.message ?? '',
      }),
      redirect: 'follow',
    });

    // Apps Script 응답 상태와 무관하게 요청이 전달됐으면 성공으로 처리
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] fetch to Apps Script failed:', err);
    return NextResponse.json({ error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 502 });
  }
}
