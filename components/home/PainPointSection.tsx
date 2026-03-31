// Pain point empathy section — shown below WhyUsSection
const PAIN_POINTS = [
  '경험은 많은데, 뭘 넣어야 할지 모르겠다',
  '기업마다 강조할 포인트가 달라서 다시 써야 한다',
  'GPT, 노션, 블로그, 카톡, PDF에 자료가 흩어져 있다',
  '포트폴리오 만들다 하루가 다 간다',
];

export function PainPointSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            PAIN POINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            시간이 가장 많이 드는 건<br className="hidden sm:block" /> 디자인이 아니라 정리입니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            어떤 경험을 넣어야 할지, 어떤 회사에 맞춰 바꿔야 할지,
            어디에 흩어진 자료를 모아야 할지.
            포트폴리오는 만들기보다 정리하는 과정이 더 오래 걸립니다.
          </p>
        </div>

        {/* Checklist */}
        <ul className="flex flex-col gap-4">
          {PAIN_POINTS.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-base text-gray-700 font-medium leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <p className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed border-l-4 border-gray-900 pl-5">
          저희는 이 귀찮은 정리 과정을 대신하고,<br className="hidden sm:block" />
          당신은 지원 전략과 면접 준비에 집중하면 됩니다.
        </p>
      </div>
    </section>
  );
}
