import React, { useMemo, useState } from 'react';
import ProgramCard from '../components/shared/ProgramCard';
import { allProgramsData } from '../data/programCatalog';
import { tracksData } from '../data/tracksData';
import { ArrowRight, Check, Search, SlidersHorizontal } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProgramsPage() {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [query, setQuery] = useState('');
  const filteredPrograms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return allProgramsData.filter((program) => {
      const matchesTrack = selectedTrack === 'all' || program.trackId === selectedTrack;
      const matchesQuery = !normalized || `${program.title} ${program.tagline} ${program.trackName} ${program.skillsDeveloped.join(' ')}`.toLowerCase().includes(normalized);
      return matchesTrack && matchesQuery;
    });
  }, [selectedTrack, query]);

  return (
    <div className="pb-20">
      <section className="technical-grid border-b border-border-subtle bg-surface/60">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">20+ ways to learn</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">Choose a path. Build practical AI capability.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">From AI foundations and workplace workflows to RAG, agents, evaluation, deployment, and security—choose the depth that fits your goal.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border-subtle bg-surface p-2 shadow-sm">
              <Stat value={allProgramsData.length} label="Programs" /><Stat value="3" label="Tracks" /><Stat value="∞" label="Builds" />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1"><Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-sub" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search programs, skills, or outcomes…" className="w-full rounded-xl border border-border-subtle bg-surface py-3 pl-10 pr-4 text-sm text-text-main outline-none placeholder:text-text-sub focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" /></div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSelectedTrack('all')} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${selectedTrack === 'all' ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg' : 'border-border-subtle bg-surface text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}><SlidersHorizontal className="mr-1.5 inline h-4 w-4" />All</button>
              {tracksData.map((track) => <button key={track.id} onClick={() => setSelectedTrack(track.id)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${selectedTrack === track.id ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg' : 'border-border-subtle bg-surface text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>{track.title}</button>)}
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-6 flex items-center justify-between gap-4"><p className="text-sm text-text-muted"><span className="font-bold text-text-main">{filteredPrograms.length}</span> programs matching your selection</p>{query && <button onClick={() => setQuery('')} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Clear search</button>}</div>
        <div className="grid gap-5 lg:grid-cols-3">{filteredPrograms.map((program) => <ProgramCard key={program.id} program={program} />)}</div>
        <section className="premium-card mt-14 rounded-3xl p-6 sm:p-8"><div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center"><div><p className="eyebrow">Not sure where to start?</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-text-main">Pick the outcome first.</h2><p className="mt-2 text-sm leading-6 text-text-muted">Understand AI, apply it at work, or build AI systems. You can move deeper as your goals change.</p></div><div className="grid gap-3 sm:grid-cols-3">{[['Understand AI','ai-literacy'],['Apply AI at work','applied-ai'],['Build AI systems','ai-careers']].map(([title,id])=><button key={id} onClick={() => { setSelectedTrack(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="rounded-xl border border-border-subtle bg-surface-inset p-4 text-left transition hover:-translate-y-0.5 hover:border-indigo-300"><Check className="h-4 w-4 text-emerald-500" /><p className="mt-3 text-sm font-semibold text-text-main">{title}</p><p className="mt-1 text-xs text-text-sub">{allProgramsData.filter((p) => p.trackId === id).length} programs</p></button>)}</div></div></section>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border-subtle bg-surface/50 p-6 text-center sm:flex-row sm:text-left"><div><p className="font-semibold text-text-main">Want to experience the format first?</p><p className="mt-1 text-sm text-text-muted">Try a short, hands-on workshop before joining a longer program.</p></div><Button to="/workshops" variant="secondary" size="sm" icon={ArrowRight}>Browse Workshops</Button></div>
      </main>
    </div>
  );
}
function Stat({ value, label }) { return <div className="min-w-[76px] rounded-xl bg-surface-inset px-3 py-2 text-center"><p className="text-lg font-extrabold text-text-main">{value}</p><p className="text-[10px] font-bold uppercase tracking-wider text-text-sub">{label}</p></div>; }
