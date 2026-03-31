// Templates listing page — brand logo buttons (fullscreen preview)
import { LogoButtons } from '@/components/templates/LogoButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '템플릿 목록 — 포트폴리오 메이커',
  description: '토스, 당근, 빗썸, 네이버, 카카오 무드별 포트폴리오 템플릿을 둘러보세요.',
};

export default function TemplatesPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3 text-center">
        5가지 회사 무드 템플릿
      </h1>
      <p className="text-base text-gray-400 mb-12 text-center">
        버튼을 누르면 해당 스타일 포트폴리오를 바로 확인할 수 있습니다.
      </p>
      <LogoButtons />
    </div>
  );
}
