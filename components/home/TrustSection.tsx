// Trust section — shown below TransformationSection
const CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h5l1 2H16v9H4V4z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 11h6M7 13.5h4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: '자료가 흩어져 있어도 괜찮습니다',
    body:  'GPT, 제미나이, 노션, 블로그, PDF, 카톡 기록까지 보고 정리합니다.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#111827" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '직군과 기업 기준으로 FIT하게 봅니다',
    body:  '같은 경험도 어디에 지원하느냐에 따라 앞에 나와야 할 내용이 달라집니다.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v7l4 2" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="7" stroke="#111827" strokeWidth="1.5" />
      </svg>
    ),
    title: '중간중간 상황을 확인하며 제작합니다',
    body:  '처음부터 끝까지 혼자 끌고 가지 않고, 방향이 맞는지 보면서 수정합니다.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#111827" strokeWidth="1.5" />
        <path d="M6 7h8M6 10h8M6 13h5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: '결과물은 보기 좋고 읽기 쉬우며, 강렬한 인상을 남길겁니다',
    body:  '예쁜 화면만이 아니라, 읽는 사람이 이해하기 쉬운 흐름으로 정리합니다.',
  },
];

export function TrustSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            자료만 받는 게 아니라,<br className="hidden sm:block" /> 목적에 맞게 다시 설계합니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            흩어진 자료를 그냥 붙이지 않습니다.
            지원 직무와 기업에 맞춰, 무엇을 살리고
            무엇을 덜어낼지 기준 있게 정리합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white px-6 py-5 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed border-l-4 border-gray-200 pl-5">
          포트폴리오는 꾸미는 작업이 아니라,{' '}
          <span className="text-gray-900 font-semibold">신뢰가 가게 정리하는 작업</span>입니다.
        </p>
      </div>
    </section>
  );
}
