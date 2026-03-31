// Reusable section heading with optional badge and subtitle
interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wider w-fit">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
