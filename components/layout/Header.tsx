// Site-wide header with logo and navigation links
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 tracking-tight hover:text-toss transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-toss focus-visible:ring-offset-2 rounded-md"
        >
          <span className="text-toss">●</span> {siteConfig.name}
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            href="/templates"
            className={`
              px-5 py-2.5 rounded-xl text-base font-medium transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-toss focus-visible:ring-offset-2
              ${pathname.startsWith('/templates')
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }
            `}
          >
            Templates
          </Link>

          <Link
            href="/request"
            className="
              ml-2 px-6 py-2.5 rounded-xl text-base font-semibold
              bg-gray-900 text-white
              hover:bg-gray-700 active:scale-95
              transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2
            "
          >
            제작 문의
          </Link>
        </nav>
      </div>
    </header>
  );
}
