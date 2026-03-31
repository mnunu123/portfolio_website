// Template card for /templates listing — wraps with GlowCard spotlight effect
import Link from 'next/link';
import Image from 'next/image';
import { Template } from '@/lib/template-data';
import { GlowCard } from '@/components/ui/spotlight-card';

// Maps template slug → GlowCard glowColor
const glowColorBySlug: Record<string, 'blue' | 'purple' | 'green' | 'red' | 'orange'> = {
  toss:    'blue',
  daangn:  'orange',
  bithumb: 'purple',
  naver:   'green',
  kakao:   'orange',
};

// Maps template slug → brand logo path
const logoBySlug: Record<string, string> = {
  toss:    '/logos/toss.png',
  daangn:  '/logos/daangn.png',
  bithumb: '/logos/bithumb.png',
  naver:   '/logos/naver.png',
  kakao:   '/logos/kakao.png',
};

interface TemplateCardProps {
  template: Template;
}

function PreviewMockup({ template }: { template: Template }) {
  const isDark = template.previewStyle === 'dark';
  const bg = isDark ? '#0F1F2E' : template.accentBg;
  const textColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)';
  const logo = logoBySlug[template.slug];

  return (
    <div
      className="w-full h-full min-h-[120px] rounded-xl overflow-hidden p-4 flex flex-col gap-2"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      {/* Fake nav with real logo */}
      <div className="flex items-center justify-between mb-1">
        <Image
          src={logo}
          alt=""
          width={28}
          height={28}
          className="object-contain rounded-md"
        />
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-1.5 rounded-full" style={{ backgroundColor: textColor }} />
          ))}
        </div>
      </div>
      {/* Fake content */}
      <div className="flex-1 flex flex-col justify-center gap-1.5">
        <div className="h-3 rounded-full w-4/5" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)' }} />
        <div className="h-2 rounded-full w-3/5" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)' }} />
      </div>
      {/* Fake CTA */}
      <div className="h-6 w-20 rounded-lg self-start" style={{ backgroundColor: template.accentColor, opacity: 0.85 }} />
    </div>
  );
}

export function TemplateCard({ template }: TemplateCardProps) {
  const logo = logoBySlug[template.slug];

  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-toss focus-visible:ring-offset-2 rounded-2xl"
      aria-label={`${template.name} 상세 보기`}
    >
      <GlowCard
        customSize
        glowColor={glowColorBySlug[template.slug] ?? 'blue'}
        className="w-full hover:-translate-y-1 transition-transform duration-200"
        style={{
          '--backdrop': 'white',
          '--backup-border': '#E5E7EB',
          '--size': '380',
          '--border': '2',
          '--radius': '16',
        } as React.CSSProperties}
      >
        {/* Row 1 (1fr): preview mockup */}
        <PreviewMockup template={template} />

        {/* Row 2 (auto): text content */}
        <div className="flex flex-col gap-2">
          {/* Logo + name */}
          <div className="flex items-center gap-2.5">
            <Image
              src={logo}
              alt={`${template.name} 로고`}
              width={28}
              height={28}
              className="object-contain rounded-md flex-shrink-0"
            />
            <h3 className="text-base font-bold text-gray-900">{template.name}</h3>
          </div>
          <p className="text-sm text-gray-500 leading-snug">{template.oneLine}</p>
          <p className="text-xs text-gray-400 leading-snug">
            <span className="font-medium text-gray-500">추천 대상</span> {template.targetUser}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {template.moodKeywords.map((kw) => (
              <span
                key={kw}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: template.accentBg, color: template.accentText }}
              >
                {kw}
              </span>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-800 transition-colors flex items-center gap-1">
              자세히 보기 <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
