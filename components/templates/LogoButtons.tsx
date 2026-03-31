// Brand logo buttons — clicking opens a fullscreen iframe preview overlay
'use client';

import Image from 'next/image';
import { useState } from 'react';

const LOGOS = [
  { slug: 'toss',    label: '토스',   src: '/logos/toss.png',    bg: '#EEF2FF', border: '#4B7BF5' },
  { slug: 'daangn', label: '당근',   src: '/logos/daangn.png',  bg: '#FFF7ED', border: '#FF6F0F' },
  { slug: 'bithumb', label: '빗썸',  src: '/logos/bithumb.png', bg: '#EFF6FF', border: '#1A3C5E' },
  { slug: 'naver',  label: '네이버', src: '/logos/naver.png',   bg: '#ECFDF5', border: '#03C75A' },
  { slug: 'kakao',  label: '카카오', src: '/logos/kakao.png',   bg: '#FEFCE8', border: '#FEE500' },
];

export function LogoButtons() {
  const [active, setActive] = useState<string | null>(null);

  const current = LOGOS.find((l) => l.slug === active);

  return (
    <>
      {/* Logo buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-10" role="group" aria-label="브랜드 템플릿 미리보기">
        {LOGOS.map((btn) => (
          <button
            key={btn.slug}
            onClick={() => setActive(btn.slug)}
            className="
              group flex items-center gap-4 px-8 py-5 rounded-2xl
              border-2 font-semibold text-xl text-gray-700
              hover:-translate-y-0.5 hover:shadow-card-hover
              active:scale-95 transition-all duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            "
            style={{ borderColor: btn.border, backgroundColor: btn.bg }}
          >
            <Image src={btn.src} alt={`${btn.label} 로고`} width={40} height={40} className="object-contain rounded-md" />
            <span>{btn.label}</span>
          </button>
        ))}
      </div>

      {/* Fullscreen overlay */}
      {active && current && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white" role="dialog" aria-modal="true" aria-label={`${current.label} 템플릿 미리보기`}>
          {/* Back button */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm transition-all"
            aria-label="뒤로가기"
          >
            ← 뒤로가기
          </button>

          {/* iframe */}
          <iframe
            key={active}
            src={`/previews/${active}.html`}
            title={`${current.label} 템플릿`}
            className="w-full h-full border-0"
          />
        </div>
      )}
    </>
  );
}
