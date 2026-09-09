import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-2xl' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className={`relative w-full ${maxWidth} bg-surface border border-border-subtle rounded-2xl shadow-2xl shadow-slate-950/40 z-10 overflow-hidden my-8 transition-colors duration-200`}>
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-border-subtle bg-surface-elevated/40">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-text-main">{title}</h3>
            {subtitle && <p className="text-xs sm:text-sm text-text-sub mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-sub hover:text-text-main hover:bg-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto text-text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
