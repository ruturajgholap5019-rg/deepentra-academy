import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  ...props
}) {
  const baseStyles = "group inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white shadow-lg shadow-indigo-950/20 focus-visible:ring-indigo-400 border border-indigo-400/20",
    secondary: "bg-surface hover:bg-surface-elevated text-text-main border border-border-subtle hover:border-indigo-400/40 focus-visible:ring-indigo-400 shadow-sm",
    accent: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-sm shadow-cyan-950/20 focus-visible:ring-cyan-300",
    ghost: "bg-transparent hover:bg-surface-elevated text-text-muted hover:text-text-main focus-visible:ring-indigo-400",
    outline: "bg-transparent border border-border-subtle hover:border-border-hover text-text-main hover:bg-surface-elevated focus-visible:ring-indigo-400",
    danger: "bg-rose-600 hover:bg-rose-500 text-white focus-visible:ring-rose-400"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
    md: "text-sm px-[18px] py-[11px] rounded-xl gap-2",
    lg: "text-base px-6 py-[13px] rounded-xl gap-2.5"
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
