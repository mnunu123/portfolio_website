// Site-wide footer with links and contact info
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-bold text-gray-900 text-sm">
              <span className="text-toss">●</span> {siteConfig.name}
            </p>
            <p className="text-gray-400 text-xs mt-1">{siteConfig.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-toss rounded"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-toss rounded"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-300 text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
