// Ready section — final conversion nudge before CTA
import Link from 'next/link';

const REASSURANCES = [
  '자료가 완벽하지 않아도 괜찮습니다',
  '지원 회사에 맞춰 방향을 다시 잡아드립니다',
  '혼자 붙잡고 끙끙대는 시간을 줄여드립니다',
];

export function ReadySection() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            READY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            자료만 보내세요.<br className="hidden sm:block" /> 귀찮은 정리는 우리가 합니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            경험 정리, 기업 맞춤 재구성, 흐름 설계까지
            직접 붙잡고 있을 필요 없습니다.
            흩어진 자료를 보내주시면, 지원 목적에 맞게 다시 정리해드립니다.
          </p>
        </div>

        {/* Reassurances */}
        <ul className="flex flex-col gap-3">
          {REASSURANCES.map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-base text-gray-600">{text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/request"
          className="self-start inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold text-base hover:bg-gray-700 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
        >
          내 자료로 상담받기 →
        </Link>
      </div>
    </section>
  );
}
