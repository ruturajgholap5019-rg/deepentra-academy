import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { projectsData } from '../data/projectsData';

export default function ShowcasePage() {
  return (
    <div className="pb-20">
      <section className="technical-grid border-b border-border-subtle">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <p className="eyebrow">Build showcase</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><h1 className="text-4xl font-extrabold tracking-[-0.04em] text-text-main sm:text-6xl">See what learning looks like when it becomes a build.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">Explore the kinds of real problems, systems, workflows, and artifacts learners can work on through Deepentra.</p></div>
            <div className="premium-card rounded-2xl p-5"><div className="flex items-center gap-2 text-sm font-bold text-text-main"><Sparkles className="h-4 w-4 text-indigo-500" /> Evidence over empty claims</div><p className="mt-2 text-sm leading-6 text-text-muted">The goal is not to collect course completion screens. It is to leave with work you can explain, demonstrate, and improve.</p></div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <article key={project.id} className="premium-card rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3"><span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-indigo-600 dark:text-indigo-300">{project.track}</span><span className="text-xs font-medium text-text-sub">Build 0{index + 1}</span></div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-text-main">{project.title}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-surface-inset p-4"><p className="text-xs font-bold uppercase tracking-[.12em] text-text-sub">The problem</p><p className="mt-2 text-sm leading-6 text-text-muted">{project.problem}</p></div>
                <div className="rounded-2xl bg-surface-inset p-4"><p className="text-xs font-bold uppercase tracking-[.12em] text-text-sub">The build</p><p className="mt-2 text-sm leading-6 text-text-muted">{project.build}</p></div>
              </div>
              <div className="mt-5"><p className="text-xs font-bold uppercase tracking-[.12em] text-text-sub">Skills & tools</p><div className="mt-2 flex flex-wrap gap-2">{project.skills.map((skill) => <span key={skill} className="rounded-lg border border-border-subtle bg-surface px-2.5 py-1.5 text-xs font-medium text-text-muted">{skill}</span>)}</div></div>
              <div className="mt-5 border-t border-border-subtle pt-5"><div className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><div><p className="text-xs font-bold uppercase tracking-[.12em] text-text-sub">Evaluation</p><p className="mt-1 text-sm leading-6 text-text-muted">{project.evaluationCriteria}</p></div></div></div>
              <div className="mt-6 flex items-center justify-between gap-3"><span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-sub"><Code2 className="h-3.5 w-3.5" /> {project.difficulty}</span><Button to="/programs" variant="ghost" size="sm" icon={ArrowRight}>Build something similar</Button></div>
            </article>
          ))}
        </div>

        <section className="mt-14 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan-300">From learner to proof</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your project should tell the story of your capability.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Problem. Approach. Build. Evaluation. What changed. That is the kind of evidence a strong portfolio can communicate.</p></div><Button to="/programs" variant="accent" size="lg" icon={ArrowRight}>Explore Programs</Button></div>
        </section>
      </main>
    </div>
  );
}
