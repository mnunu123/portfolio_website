// API route — forwards form submission to Google Apps Script Web App
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.APPS_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json({ error: 'APPS_SCRIPT_URL not set' }, { status: 500 });
  }

  try {
    const body = await req.json();

    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Apps Script returned ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] error:', err);
    return NextResponse.json({ error: '전송에 실패했습니다.' }, { status: 500 });
  }
}
