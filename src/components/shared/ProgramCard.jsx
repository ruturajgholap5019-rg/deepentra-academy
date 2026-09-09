import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3 } from 'lucide-react';
import Badge from '../ui/Badge';

export default function ProgramCard({ program }) {
  return (
    <article className="premium-card group flex h-full flex-col rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge trackId={program.trackId}>{program.trackName}</Badge>
        <span className="text-xs font-medium text-text-sub">{program.level}</span>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-text-main group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
        {program.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-text-muted">{program.tagline}</p>

      <div className="mt-5 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.045] p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">You will be able to</p>
        <p className="mt-1.5 text-sm font-medium leading-6 text-text-main">{program.primaryOutcome}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border-subtle pt-5">
        <span className="flex items-center gap-1.5 text-xs text-text-sub">
          <Clock3 className="h-3.5 w-3.5" /> {program.duration}
        </span>
        <Link to={`/programs/${program.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-main hover:text-indigo-600 dark:hover:text-indigo-300">
          View program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
