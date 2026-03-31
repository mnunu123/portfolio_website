// Landing page hero section — full viewport height, no scroll needed
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center">
      {/* Subtle pastel background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-sky-pastel/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[500px] h-[500px] rounded-full bg-lavender-pastel/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-mint-100/30 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-50 border border-gray-200 text-base text-gray-500 font-medium mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-toss animate-pulse" />
          취준 포트폴리오의 새로운 기준
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8 text-balance">
          원하는 회사 스타일을 고르면,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-toss via-purple-500 to-daangn">
            그 무드에 맞춰 제작합니다.
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
          디자인만 예쁜 게 아니라, 스토리까지 정리된 포트폴리오.
          <br className="hidden sm:block" />
          토스·당근·빗썸·네이버·카카오 무드 중 원하는 스타일을 골라보세요.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/templates"
            className="
              inline-flex items-center gap-2 px-9 py-4 rounded-2xl
              bg-gray-900 text-white font-semibold text-lg
              hover:bg-gray-700 active:scale-95
              transition-all shadow-sm
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2
            "
          >
            템플릿 둘러보기
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/request"
            className="
              inline-flex items-center gap-2 px-9 py-4 rounded-2xl
              bg-white text-gray-700 font-semibold text-lg
              border border-gray-200
              hover:border-gray-300 hover:bg-gray-50 active:scale-95
              transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
            "
          >
            제작 문의하기
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-base text-gray-400">
          ✦ 100+ 포트폴리오 제작 완료 &nbsp;·&nbsp; 평균 만족도 4.9/5
        </p>
      </div>
    </section>
  );
}
