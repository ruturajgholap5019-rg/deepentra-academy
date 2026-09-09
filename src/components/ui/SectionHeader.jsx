import React from 'react';

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = 'center',
  className = '',
  badge
}) {
  const alignmentClasses = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col max-w-4xl mb-8 sm:mb-10 ${alignmentClasses[align]} ${className}`}>
      {badge && <div className="mb-2.5">{badge}</div>}
      {overline && (
        <span className="text-[11px] uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-1.5">
          {overline}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-main leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
