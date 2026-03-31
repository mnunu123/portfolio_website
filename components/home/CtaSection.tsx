// Bottom CTA section for the homepage
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-14 sm:px-16 text-center">
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-toss/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-daangn/20 blur-3xl" />
          </div>

          <div className="relative">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              지금 바로 시작하기
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-balance">
              취준용 포트폴리오를,
              <br />더 보기 좋고 더 설득력 있게.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto text-balance">
              원하는 무드를 선택하고 제작 문의를 남겨주세요.
              <br />빠르게 확인 후 연락드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/templates"
                className="
                  inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                  bg-white text-gray-900 font-semibold text-base
                  hover:bg-gray-100 active:scale-95
                  transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                "
              >
                템플릿 둘러보기 →
              </Link>
              <Link
                href="/request"
                className="
                  inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                  bg-transparent text-white font-semibold text-base
                  border border-white/20
                  hover:border-white/40 hover:bg-white/10 active:scale-95
                  transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                "
              >
                제작 문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
