// Template live preview — iframe showing the actual HTML template file
'use client';

import { useState } from 'react';
import { Template } from '@/lib/template-data';

interface TemplatePreviewProps {
  template: Template;
}

export function TemplatePreview({ template }: TemplatePreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const src = `/previews/${template.slug}.html`;

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      {/* Toolbar */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Fake browser dots */}
          <span className="w-3 h-3 rounded-full bg-red-300" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-yellow-300" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-green-300" aria-hidden="true" />
          <span
            className="ml-3 text-xs text-gray-400 bg-white border border-gray-200 rounded-lg px-4 py-1 font-mono select-none"
          >
            {template.slug}.portfolio.kr
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen((v) => !v)}
            className="text-xs text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            {isFullscreen ? '축소' : '전체화면'}
          </button>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            새 탭으로 열기 ↗
          </a>
        </div>
      </div>

      {/* iframe */}
      <div
        className={`w-full transition-all duration-300 ${
          isFullscreen ? 'h-[85vh]' : 'h-[600px] sm:h-[720px]'
        }`}
      >
        <iframe
          src={src}
          title={`${template.name} 미리보기`}
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
