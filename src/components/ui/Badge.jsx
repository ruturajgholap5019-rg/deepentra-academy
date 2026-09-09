import React from 'react';
import { CheckCircle2, Sparkles, Terminal, BookOpen } from 'lucide-react';

export default function Badge({
  children,
  variant = 'default',
  trackId,
  icon = false,
  className = ''
}) {
  if (trackId === 'ai-literacy') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 font-mono ${className}`}>
        {icon && <BookOpen className="w-3 h-3" />}
        {children || 'AI Literacy'}
      </span>
    );
  }

  if (trackId === 'applied-ai') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-mono ${className}`}>
        {icon && <Sparkles className="w-3 h-3" />}
        {children || 'Applied AI'}
      </span>
    );
  }

  if (trackId === 'ai-careers') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 font-mono ${className}`}>
        {icon && <Terminal className="w-3 h-3" />}
        {children || 'AI & Software Careers'}
      </span>
    );
  }

  const variants = {
    default: "bg-surface-elevated text-text-muted border border-border-subtle",
    verified: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
    accent: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30",
    brand: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/30",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30",
    sky: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/30",
    subtle: "bg-surface text-text-sub border border-border-subtle font-mono text-[11px]"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default} ${className}`}>
      {variant === 'verified' && <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />}
      {children}
    </span>
  );
}
