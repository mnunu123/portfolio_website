// Homepage template preview grid — wraps each card with GlowCard spotlight effect
import Link from 'next/link';
import { templates, Template } from '@/lib/template-data';
import { GlowCard } from '@/components/ui/spotlight-card';

// Maps template slug → GlowCard glowColor
const glowColorBySlug: Record<string, 'blue' | 'purple' | 'green' | 'red' | 'orange'> = {
  toss:    'blue',
  daangn:  'orange',
  bithumb: 'purple',
  naver:   'green',
  kakao:   'orange',
};

function MiniPreviewCard({ template }: { template: Template }) {
  const isDark = template.previewStyle === 'dark';

  return (
    <div
      className="w-full h-full min-h-[80px] rounded-xl overflow-hidden flex flex-col p-3 gap-2"
      style={{ backgroundColor: isDark ? '#0F1F2E' : template.accentBg }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: template.accentColor }} />
        <div className="h-1.5 rounded-full w-16 opacity-30" style={{ backgroundColor: isDark ? '#fff' : '#000' }} />
      </div>
      <div className="h-2 rounded-full w-3/4 opacity-20" style={{ backgroundColor: isDark ? '#fff' : '#000' }} />
      <div className="h-2 rounded-full w-1/2 opacity-15" style={{ backgroundColor: isDark ? '#fff' : '#000' }} />
      <div className="mt-auto h-4 rounded-lg w-20 opacity-70" style={{ backgroundColor: template.accentColor }} />
    </div>
  );
}

export function TemplatePreviewGrid() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
            Templates
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            5가지 회사 무드 템플릿
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            어떤 회사 스타일에 끌리나요? 그 무드를 골라주세요.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {templates.map((template) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-toss focus-visible:ring-offset-2 rounded-2xl"
              aria-label={`${template.name} 템플릿 보기`}
            >
              {/* GlowCard is the visual card — white bg, glow border on hover */}
              <GlowCard
                customSize
                glowColor={glowColorBySlug[template.slug] ?? 'blue'}
                className="w-full hover:-translate-y-1 transition-transform duration-200"
                style={{
                  '--backdrop': 'white',
                  '--backup-border': '#E5E7EB',
                  '--size': '280',
                  '--border': '2',
                  '--radius': '16',
                } as React.CSSProperties}
              >
                {/* Row 1 (1fr): preview mockup */}
                <MiniPreviewCard template={template} />

                {/* Row 2 (auto): name + keywords */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span aria-hidden="true">{template.emoji}</span>
                    <span className="text-sm font-semibold text-gray-900">{template.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-snug line-clamp-2">{template.oneLine}</p>
                  <div className="flex flex-wrap gap-1">
                    {template.moodKeywords.slice(0, 2).map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: template.accentBg, color: template.accentText }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/templates"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              border border-gray-200 bg-white text-gray-700 font-semibold text-sm
              hover:bg-gray-50 hover:border-gray-300 active:scale-95
              transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
            "
          >
            전체 템플릿 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
