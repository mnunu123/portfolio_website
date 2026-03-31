// "Why this service" features section for the homepage
import { SectionTitle } from '@/components/common/SectionTitle';

const features = [
  {
    icon: '🎨',
    title: '원하는 회사 무드 선택',
    description:
      '토스, 당근, 빗썸, 네이버, 카카오 — 끌리는 디자인 무드를 고르면 그 스타일로 전체 포트폴리오를 구성합니다.',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: '🌐',
    title: '웹사이트형 포트폴리오',
    description:
      'PDF나 노션이 아닌, 실제 웹사이트로 만들어집니다. URL 하나로 어디서든 공유 가능하고, 첫인상이 완전히 달라집니다.',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: '📖',
    title: '자료 기반 스토리 구성',
    description:
      '단순 스펙 나열이 아닙니다. 경험과 숫자를 기반으로 설득력 있는 스토리를 함께 정리합니다.',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          badge="Why"
          title="디자인만 예쁜 게 아닙니다"
          subtitle="스토리까지 정리된 포트폴리오, 취업 준비의 무게를 덜어드립니다."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className={`
                rounded-2xl p-6 border
                ${f.bg} ${f.border}
              `}
            >
              <div className="text-3xl mb-4" aria-hidden="true">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
