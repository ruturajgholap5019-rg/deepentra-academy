import React, { useState } from 'react';
import ProgramCard from '../components/shared/ProgramCard';
import { programsData } from '../data/programsData';
import { tracksData } from '../data/tracksData';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProgramsPage() {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const filteredPrograms = selectedTrack === 'all' ? programsData : programsData.filter((program) => program.trackId === selectedTrack);

  return (
    <div className="pb-20">
      <section className="technical-grid border-b border-border-subtle bg-surface/60">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Programs</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">Choose a path. Build practical AI capability.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">Start with the outcome you want, then choose the depth and format that fits you.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <button onClick={() => setSelectedTrack('all')} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${selectedTrack === 'all' ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-950/15' : 'border-border-subtle bg-surface/80 text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>All programs</button>
            {tracksData.map((track) => (
              <button key={track.id} onClick={() => setSelectedTrack(track.id)} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${selectedTrack === track.id ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-950/15' : 'border-border-subtle bg-surface/80 text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>{track.title}</button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredPrograms.map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>

        <section className="premium-card mt-12 rounded-2xl p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">Not sure where to start?</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-main">Pick the outcome first.</h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">If you are new to AI, start with literacy. If you want workplace leverage, choose Applied AI. If you want to engineer systems, choose the technical path.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['Understand AI', 'AI Literacy'],
                ['Apply AI at work', 'Applied AI'],
                ['Build AI systems', 'AI & Software Careers'],
              ].map(([title, label]) => (
                <button key={label} onClick={() => setSelectedTrack(tracksData.find((track) => track.title === label)?.id || 'all')} className="rounded-xl border border-border-subtle bg-surface-inset p-4 text-left hover:border-indigo-300">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <p className="mt-3 text-sm font-semibold text-text-main">{title}</p>
                  <p className="mt-1 text-xs text-text-sub">{label}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border-subtle bg-surface/50 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-text-main">Want to experience the format first?</p>
            <p className="mt-1 text-sm text-text-muted">Try a short, hands-on workshop before joining a longer program.</p>
          </div>
          <Button to="/workshops" variant="secondary" size="sm" icon={ArrowRight}>Browse Workshops</Button>
        </div>
      </main>
    </div>
  );
}
