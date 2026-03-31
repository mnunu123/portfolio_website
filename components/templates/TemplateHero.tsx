// Template detail hero — large title, description, and mood keywords
import Link from 'next/link';
import Image from 'next/image';
import { Template } from '@/lib/template-data';

const logoBySlug: Record<string, string> = {
  toss:    '/logos/toss.png',
  daangn:  '/logos/daangn.png',
  bithumb: '/logos/bithumb.png',
  naver:   '/logos/naver.png',
  kakao:   '/logos/kakao.png',
};

interface TemplateHeroProps {
  template: Template;
}

export function TemplateHero({ template }: TemplateHeroProps) {
  return (
    <div
      className="py-14 sm:py-20 border-b border-gray-100"
      style={{ backgroundColor: template.accentBg }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="flex-1">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="breadcrumb">
              <Link href="/templates" className="hover:text-gray-700 transition-colors">Templates</Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: template.accentText }} className="font-medium">{template.name}</span>
            </nav>

            {/* Logo + Title */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={logoBySlug[template.slug] ?? ''}
                alt={`${template.name} 로고`}
                width={56}
                height={56}
                className="object-contain rounded-2xl flex-shrink-0"
              />
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                {template.name}
              </h1>
            </div>

            {/* One-line */}
            <p className="text-lg sm:text-xl font-medium text-gray-600 mb-5">
              {template.oneLine}
            </p>

            {/* Mood keywords */}
            <div className="flex flex-wrap gap-2">
              {template.moodKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: template.accentColor + '22',
                    color: template.accentText,
                    border: `1px solid ${template.accentColor}44`,
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:items-end">
            <Link
              href="/request"
              className="
                inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl
                text-white font-bold text-base
                hover:opacity-90 active:scale-95
                transition-all shadow-sm
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              "
              style={{ backgroundColor: template.accentColor }}
            >
              이 디자인으로 제작 문의
            </Link>
            <Link
              href="/templates"
              className="
                inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                text-gray-500 text-sm font-medium
                hover:text-gray-800 hover:bg-white/60
                transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
              "
            >
              ← 다른 템플릿 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
