import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface/80">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/brand/deepentra-logo.png" alt="Deepentra Academy" className="h-8 w-8 object-contain" />
              <span className="font-extrabold tracking-tight text-text-main">Deepentra Academy</span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-text-muted">
              Practical AI education for people who want to understand, build, and apply AI in the real world.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-text-main">Learn</h3>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <Link className="block hover:text-text-main" to="/programs">Programs</Link>
              <Link className="block hover:text-text-main" to="/events">Hackathons & Events</Link>
              <Link className="block hover:text-text-main" to="/workshops">Workshops</Link>
              <Link className="block hover:text-text-main" to="/showcase">Build Showcase</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-text-main">Explore</h3>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <Link className="block hover:text-text-main" to="/projects">Project Challenges</Link>
              <Link className="block hover:text-text-main" to="/student-work">Student Work</Link>
              <Link className="block hover:text-text-main" to="/resources">Resources</Link>
              <Link className="block hover:text-text-main" to="/about">About</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-text-main">Organizations</h3>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <Link className="block hover:text-text-main" to="/institutions">For Institutions</Link>
              <Link className="flex items-center gap-1 hover:text-text-main" to="/credentials">Verify a Credential <ArrowUpRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-border-subtle pt-5 text-xs text-text-sub sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Deepentra Academy</span>
          <span>Learn → Practice → Build → Prove</span>
        </div>
      </div>
    </footer>
  );
}
