// Transformation section — before/after comparison below PainPointSection
const COMPARISONS = [
  {
    before: '경험이 많아도 그냥 나열된다',
    after:  '지원 목적에 맞는 흐름으로 다시 묶인다',
  },
  {
    before: '좋은 경험이 묻힌다',
    after:  '핵심 경험이 먼저 보이게 정리된다',
  },
  {
    before: '기업마다 처음부터 다시 고친다',
    after:  '타깃에 맞는 버전으로 빠르게 바꿀 수 있다',
  },
];

export function TransformationSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            TRANSFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            우리가 만드는 건 예쁜 화면이 아니라,<br className="hidden sm:block" /> 설득되는 흐름입니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            자료를 보기 좋게 붙이는 데서 끝나지 않습니다.
            지원 직무와 기업에 맞게, 어떤 경험을 앞에 두고
            어떤 경험을 덜어낼지 다시 설계합니다.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="flex flex-col gap-4">
          {/* Column labels */}
          <div className="grid grid-cols-2 gap-4 px-1">
            <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">BEFORE</span>
            <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">AFTER</span>
          </div>

          {COMPARISONS.map((item, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-400 leading-relaxed">{item.before}</p>
              </div>
              {/* After */}
              <div className="rounded-2xl border border-gray-900 bg-gray-900 px-5 py-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-white font-medium leading-relaxed">{item.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
          같은 경험도, <span className="text-gray-900 font-semibold">어떻게 정리하느냐에 따라</span> 전달력은 크게 달라집니다.
        </p>
      </div>
    </section>
  );
}
