// WHY US persuasion section — shown directly below Hero
import Link from 'next/link';

const CARDS = [
  {
    title: '흩어진 자료 정리',
    body:  '여러 곳에 있는 경험을 한 번에 모읍니다.',
  },
  {
    title: '직군·기업 맞춤 재구성',
    body:  '필요한 경험만 골라 스토리를 다시 짭니다.',
  },
  {
    title: '바로 제출 가능한 결과물',
    body:  '읽기 쉬운 웹 포트폴리오로 완성합니다.',
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            WHY US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            포트폴리오, 만드는 것보다<br className="hidden sm:block" /> 정리하는 게 더 귀찮습니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            직군 리서치, 기업 분석, 흩어진 경험 정리까지.
            GPT, 제미나이, 노션, 블로그 등에 흩어진 자료를 지원 목적에 맞게 다시 엮어드립니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold text-base hover:bg-gray-700 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            내 포트폴리오 상담받기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
