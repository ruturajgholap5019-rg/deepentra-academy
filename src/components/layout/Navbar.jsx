import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Programs', path: '/programs' },
    { name: 'Hackathons', path: '/events' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'For Institutions', path: '/institutions' },
    { name: 'Showcase', path: '/showcase' },
  ];
  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle/80 bg-canvas/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-2.5">
          <img src="/brand/deepentra-logo.png" alt="Deepentra Academy" className="h-9 w-9 object-contain" />
          <div className="leading-none"><span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Deepentra</span><span className="mt-1 block text-[15px] font-extrabold tracking-tight text-text-main">AI LAB · ACADEMY</span></div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => <Link key={link.path} to={link.path} className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive(link.path) ? 'bg-surface text-text-main shadow-sm ring-1 ring-border-subtle' : 'text-text-muted hover:bg-surface/70 hover:text-text-main'}`}>{link.name}</Link>)}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex"><Button to="/about" variant="secondary" size="sm" icon={Sparkles}>Join as Coach</Button></div>
          <ThemeToggle />
          <Button to="/programs" variant="primary" size="sm" icon={ArrowRight} className="hidden sm:inline-flex">Explore Programs</Button>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-lg border border-border-subtle p-2 text-text-muted hover:bg-surface hover:text-text-main xl:hidden" aria-expanded={mobileMenuOpen} aria-label="Toggle navigation">{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      {mobileMenuOpen && <div className="border-t border-border-subtle bg-canvas px-4 py-4 xl:hidden"><nav className="mx-auto max-w-[1280px] space-y-1" aria-label="Mobile navigation"><Link to="/" onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted hover:bg-surface hover:text-text-main">Home</Link>{navLinks.map((link) => <Link key={link.path} to={link.path} onClick={closeMenu} className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${isActive(link.path) ? 'bg-surface text-text-main' : 'text-text-muted hover:bg-surface hover:text-text-main'}`}>{link.name}</Link>)}<div className="pt-3"><Button to="/programs" variant="primary" size="md" className="w-full justify-center" onClick={closeMenu}>Explore Programs</Button></div></nav></div>}
    </header>
  );
}
