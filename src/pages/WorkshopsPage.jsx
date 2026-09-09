import React, { useState } from 'react';
import WorkshopCard from '../components/shared/WorkshopCard';
import { workshopsData } from '../data/workshopsData';
import { tracksData } from '../data/tracksData';
import Button from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export default function WorkshopsPage() {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const filtered = selectedTrack === 'all' ? workshopsData : workshopsData.filter((workshop) => workshop.trackId === selectedTrack);

  return (
    <div className="pb-20">
      <section className="technical-grid border-b border-border-subtle bg-surface/60">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Workshops</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">Try AI by actually doing something.</h1>
            <p className="mt-4 text-base leading-7 text-text-muted">Short, guided sessions where you explore a real problem, use the tools, and leave with a practical artifact.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <button onClick={() => setSelectedTrack('all')} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${selectedTrack === 'all' ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-950/15' : 'border-border-subtle bg-surface/80 text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>All workshops</button>
            {tracksData.map((track) => <button key={track.id} onClick={() => setSelectedTrack(track.id)} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${selectedTrack === track.id ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-950/15' : 'border-border-subtle bg-surface/80 text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>{track.title}</button>)}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((workshop) => <WorkshopCard key={workshop.id} workshop={workshop} />)}
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ['1', 'Choose a real problem'],
            ['2', 'Build with guidance'],
            ['3', 'Leave with something useful'],
          ].map(([number, title]) => (
            <div key={number} className="rounded-2xl border border-border-subtle bg-surface p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">{number}</span>
              <h2 className="mt-4 font-bold text-text-main">{title}</h2>
              <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-500" /> Instructor-guided, practical, and focused.</div>
            </div>
          ))}
        </section>

        <div className="mt-10 overflow-hidden rounded-2xl border border-indigo-400/10 bg-slate-950 p-6 text-white shadow-2xl shadow-indigo-950/10 sm:p-8">
          <h2 className="text-2xl font-bold">Want a deeper learning path?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Use a workshop as your first step, then move into a structured Deepentra program when you know which capability you want to build.</p>
          <div className="mt-5"><Button to="/programs" variant="primary" size="sm" icon={ArrowRight}>Explore Programs</Button></div>
        </div>
      </main>
    </div>
  );
}
