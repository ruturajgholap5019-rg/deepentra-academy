import React from 'react';
import { ArrowRight, Check, Code2, Compass, Layers3 } from 'lucide-react';
import Button from '../components/ui/Button';
import { facultyData } from '../data/facultyData';

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border-subtle bg-surface/60">
        <div className="mx-auto max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">About Deepentra</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">AI education should produce capability, not just completion.</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted sm:text-lg">Deepentra Academy is built around a simple idea: learning becomes more valuable when you use it to solve problems, build things, receive feedback, and show evidence of what you can do.</p>
        </div>
      </section>

      <main className="mx-auto max-w-[1000px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-5 md:grid-cols-3">
          {[
            [Compass, 'Practical first', 'Move from concepts to useful exercises and real projects.'],
            [Code2, 'Build with real tools', 'Work with the technologies and workflows used to create modern AI systems.'],
            [Layers3, 'Evidence matters', 'Projects, feedback, and evaluation should tell a clearer story than a completion badge alone.'],
          ].map(([Icon, title, copy]) => (
            <div key={title} className="rounded-2xl border border-border-subtle bg-surface p-5 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"><Icon className="h-5 w-5" /></span>
              <h2 className="mt-5 font-bold text-text-main">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">{copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">The Deepentra approach</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main">Learn → Practice → Build → Evaluate → Prove</h2>
            <p className="mt-4 text-sm leading-6 text-text-muted">The three learning tracks share the same philosophy, but each has a different depth and outcome.</p>
            <div className="mt-6 space-y-3">
              {['AI Literacy — confidence, safe use, and a first proof point.', 'Applied AI — useful workplace workflows and professional capability.', 'AI & Software Careers — portfolio-grade systems, deeper evaluation, and technical growth.'].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border-subtle bg-surface p-4 text-sm text-text-muted"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-sub">What we avoid</p>
            <div className="mt-4 space-y-3 text-sm text-text-muted">
              <p>• Huge catalogs with no clear progression.</p>
              <p>• Long theory sections disconnected from practice.</p>
              <p>• Empty marketing claims or fake outcomes.</p>
              <p>• Technology lists presented as learning outcomes.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border-subtle pt-12">
          <div className="flex items-end justify-between gap-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">People</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main">Learn from practitioners.</h2></div>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {facultyData.slice(0, 3).map((person) => (
              <div key={person.id} className="rounded-2xl border border-border-subtle bg-surface p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-sm font-bold text-indigo-600 dark:text-indigo-300">{person.name.split(' ').map((n) => n[0]).join('')}</div>
                <h3 className="mt-4 font-bold text-text-main">{person.name}</h3>
                <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">{person.role}</p>
                <p className="mt-3 text-sm leading-6 text-text-muted">{person.background}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
          <h2 className="text-2xl font-bold">See how the learning works.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Start with a program or workshop and experience a learning path built around doing, not just consuming.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row"><Button to="/programs" variant="primary" size="sm" icon={ArrowRight}>Explore Programs</Button><Button to="/workshops" variant="secondary" size="sm">Browse Workshops</Button></div>
        </section>
      </main>
    </div>
  );
}
