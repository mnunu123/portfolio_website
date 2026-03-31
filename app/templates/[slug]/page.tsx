// Template detail page — shows full template info and live HTML preview
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { templates, getTemplateBySlug } from '@/lib/template-data';
import { TemplateHero } from '@/components/templates/TemplateHero';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};
  return {
    title: `${template.name} — 포트폴리오 메이커`,
    description: template.description,
  };
}

// Sample section placeholder component
function SampleSection({
  title,
  children,
  accentColor,
}: {
  title: string;
  children: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-soft">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <TemplateHero template={template} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Description */}
            <SampleSection title="템플릿 소개" accentColor={template.accentColor}>
              <p className="text-gray-600 leading-relaxed">{template.description}</p>
            </SampleSection>

            {/* Sample: About section */}
            <SampleSection title="샘플 — About" accentColor={template.accentColor}>
              <div className="flex flex-col gap-4">
                <div
                  className="h-3 rounded-full w-1/3"
                  style={{ backgroundColor: template.accentColor, opacity: 0.7 }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2" aria-hidden="true">
                  {[0.9, 0.75, 0.6].map((op, i) => (
                    <div
                      key={i}
                      className="h-2.5 rounded-full bg-gray-200"
                      style={{ width: `${[80, 65, 45][i]}%`, opacity: op }}
                    />
                  ))}
                </div>
                <div
                  className="mt-2 px-4 py-2 rounded-xl text-white text-sm font-semibold w-fit"
                  style={{ backgroundColor: template.accentColor }}
                  aria-hidden="true"
                >
                  연락하기
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                * 실제 포트폴리오에는 이름, 직무, 자기소개, 연락처 등이 들어갑니다.
              </p>
            </SampleSection>

            {/* Sample: Projects section */}
            <SampleSection title="샘플 — Projects" accentColor={template.accentColor}>
              <div className="grid grid-cols-2 gap-3" aria-hidden="true">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-gray-100"
                  >
                    <div
                      className="h-20"
                      style={{ backgroundColor: template.accentBg }}
                    />
                    <div className="p-3 flex flex-col gap-1.5">
                      <div className="h-2.5 rounded-full bg-gray-200 w-3/4" />
                      <div className="h-2 rounded-full bg-gray-100 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400">
                * 실제 포트폴리오에는 프로젝트 이름, 설명, 성과 지표, 링크 등이 들어갑니다.
              </p>
            </SampleSection>

            {/* Sample: Experience section */}
            <SampleSection title="샘플 — Experience" accentColor={template.accentColor}>
              <div className="flex flex-col gap-4" aria-hidden="true">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: template.accentBg }}
                    />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="h-2.5 rounded-full bg-gray-200 w-1/2" />
                      <div className="h-2 rounded-full bg-gray-100 w-1/3" />
                      <div className="h-2 rounded-full bg-gray-100 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400">
                * 실제 포트폴리오에는 회사명, 직책, 기간, 주요 성과 등이 들어갑니다.
              </p>
            </SampleSection>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* Target user */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-soft p-5">
              <h2 className="text-sm font-bold text-gray-900 mb-3">이런 분께 잘 어울려요</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{template.targetUser}</p>
            </div>

            {/* Mood keywords */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-soft p-5">
              <h2 className="text-sm font-bold text-gray-900 mb-3">분위기 키워드</h2>
              <div className="flex flex-wrap gap-2">
                {template.moodKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: template.accentBg,
                      color: template.accentText,
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: template.accentBg }}
            >
              <p className="text-sm font-semibold text-gray-800">
                이 무드가 마음에 드시나요?
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                제작 문의를 남기시면 담당자가 빠르게 연락드립니다.
              </p>
              <Link
                href="/request"
                className="
                  inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl
                  text-white font-bold text-sm
                  hover:opacity-90 active:scale-95
                  transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                "
                style={{ backgroundColor: template.accentColor }}
              >
                이 디자인으로 제작 문의
              </Link>
            </div>

            {/* Other templates */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-soft p-5">
              <h2 className="text-sm font-bold text-gray-900 mb-3">다른 템플릿</h2>
              <div className="flex flex-col gap-2">
                {templates
                  .filter((t) => t.slug !== template.slug)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      href={`/templates/${t.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-toss"
                    >
                      <span aria-hidden="true">{t.emoji}</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
