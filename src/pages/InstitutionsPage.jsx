import React from 'react';
import { ArrowRight, Building2, Check, UsersRound } from 'lucide-react';
import Button from '../components/ui/Button';

export default function InstitutionsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border-subtle bg-surface/60">
        <div className="mx-auto max-w-[1100px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">For Institutions</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">Bring practical AI learning to your campus or team.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">Use Deepentra workshops and structured programs to help learners move from AI awareness to practical, demonstrable capability.</p>
          <div className="mt-7"><Button href="mailto:partnerships@deepentra.com?subject=Deepentra%20Institutional%20Partnership" variant="primary" size="lg" icon={ArrowRight}>Talk to the team</Button></div>
        </div>
      </section>

      <main className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm">
            <Building2 className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
            <h2 className="mt-5 text-xl font-bold text-text-main">For colleges & universities</h2>
            <p className="mt-2 text-sm leading-6 text-text-muted">Practical workshops, cohorts, bootcamps, and project-led learning that can fit into academic or campus programs.</p>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">{['AI literacy workshops', 'Technical AI cohorts and labs', 'Project and capstone experiences', 'Evidence-oriented learner outcomes'].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{x}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm">
            <UsersRound className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
            <h2 className="mt-5 text-xl font-bold text-text-main">For teams & organizations</h2>
            <p className="mt-2 text-sm leading-6 text-text-muted">Role-specific learning focused on applying AI to real workflows, operational problems, and technical projects.</p>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">{['Role-based Applied AI workshops', 'Team learning sprints', 'Workflow and automation projects', 'Technical AI engineering programs'].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{x}</li>)}</ul>
          </div>
        </div>

        <section className="mt-12 rounded-2xl border border-border-subtle bg-surface-inset p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">A simple model</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-4">
            {['Define the audience', 'Choose the right track', 'Run practical learning', 'Review the evidence'].map((step, index) => <div key={step} className="rounded-xl border border-border-subtle bg-surface p-4"><span className="text-xs font-bold text-text-sub">0{index + 1}</span><p className="mt-3 text-sm font-semibold text-text-main">{step}</p></div>)}
          </div>
        </section>

        <div className="mt-12 text-center"><p className="text-sm text-text-muted">Tell us what you are trying to teach, who the learners are, and what outcome you want.</p><div className="mt-4"><Button href="mailto:partnerships@deepentra.com?subject=Deepentra%20Institutional%20Partnership" variant="secondary" size="md" icon={ArrowRight}>Contact Partnerships</Button></div></div>
      </main>
    </div>
  );
}
