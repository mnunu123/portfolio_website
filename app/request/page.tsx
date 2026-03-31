// Request/contact page — form for portfolio production inquiry
import { RequestForm } from '@/components/request/RequestForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제작 문의 — 포트폴리오 메이커',
  description: '원하는 템플릿 무드를 선택하고 포트폴리오 제작 문의를 남겨주세요.',
};

export default function RequestPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            포트폴리오 제작을 시작해볼게요
          </h1>
          <p className="text-base text-gray-400">
            원하는 무드와 기본 정보를 남겨주시면 담당자가 빠르게 연락드립니다.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 pb-24">
        <RequestForm />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-3">아직 템플릿을 못 고르셨나요?</p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-toss hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-toss rounded"
          >
            템플릿 둘러보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
