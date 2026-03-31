// API route (App Router) — validates form data and forwards to Google Apps Script
import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  template: string;
  role: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
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
    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:     payload.name,
        email:    payload.email,
        template: payload.template,
        role:     payload.role ?? '',
        message:  payload.message ?? '',
      }),
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Apps Script fetch failed:', err);
    return NextResponse.json({ error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 502 });
  }
}
