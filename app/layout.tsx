// Root layout: applies global styles, fonts, and shared metadata
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '포트폴리오 메이커 — 원하는 회사 무드로 만드는 포트폴리오',
  description:
    '토스, 당근, 빗썸, 네이버, 카카오 스타일의 포트폴리오 템플릿 중 원하는 무드를 골라 나만의 웹사이트형 포트폴리오를 제작하세요.',
  keywords: ['포트폴리오', '취업', '디자인', '템플릿', '취준'],
  openGraph: {
    title: '포트폴리오 메이커',
    description: '원하는 회사 무드로 만드는 포트폴리오',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
