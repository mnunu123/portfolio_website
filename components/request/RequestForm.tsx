// Request form — client component, submits to /api/contact (server forwards to Google Apps Script)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { templates } from '@/lib/template-data';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function RequestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name:     fd.get('name'),
      email:    fd.get('email'),
      template: fd.get('template'),
      role:     fd.get('role'),
      message:  fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? '전송에 실패했습니다.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : '전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-10 flex flex-col items-center gap-4 text-center">
        <div className="text-4xl">✅</div>
        <h2 className="text-xl font-extrabold text-gray-900">문의가 접수됐습니다!</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          보통 1~2일 이내에 입력하신 이메일로 연락드립니다.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-700 transition-all"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 flex flex-col gap-6"
      noValidate
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
          이름 <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="name" name="name" type="text" required placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-toss focus:border-transparent focus:bg-white transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
          이메일 <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="email" name="email" type="email" required placeholder="hello@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-toss focus:border-transparent focus:bg-white transition"
        />
      </div>

      {/* Template select */}
      <div className="flex flex-col gap-2">
        <label htmlFor="template" className="text-sm font-semibold text-gray-700">
          원하는 템플릿 무드 <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <select
          id="template" name="template" required defaultValue=""
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-toss focus:border-transparent focus:bg-white transition appearance-none"
        >
          <option value="" disabled>템플릿을 선택해주세요</option>
          {templates.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.emoji} {t.name} — {t.oneLine}
            </option>
          ))}
          <option value="custom">아직 모르겠어요, 함께 정해주세요</option>
        </select>
      </div>

      {/* Job / target */}
      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="text-sm font-semibold text-gray-700">
          목표 직군
        </label>
        <input
          id="role" name="role" type="text"
          placeholder="예: 프론트엔드 개발자, 서비스 기획자, UX 디자이너"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-toss focus:border-transparent focus:bg-white transition"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700">
          추가로 전하고 싶은 말
        </label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="보유 경력, 희망 일정, 참고 포트폴리오 링크 등 자유롭게 적어주세요."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-toss focus:border-transparent focus:bg-white transition resize-none"
        />
      </div>

      {errorMsg && (
        <p className="text-sm text-red-500 text-center">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 rounded-2xl bg-gray-900 text-white font-bold text-base hover:bg-gray-700 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? '전송 중...' : '문의 보내기'}
      </button>

      <p className="text-center text-xs text-gray-400">
        보통 1~2일 이내에 이메일로 연락드립니다.
      </p>
    </form>
  );
}
