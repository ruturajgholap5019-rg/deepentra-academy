import React from 'react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { studentWorkData } from '../data/studentWorkData';
import { CheckCircle2, Award, GitBranch, ArrowRight } from 'lucide-react';

export default function StudentWorkPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand">Learner Builds</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
          See what learning can produce
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Instead of generic testimonials, explore examples of the problems learners tackled, what they built, and how the work changed through iteration and review.
        </p>
      </div>

      {/* Case Studies / Evidence Stories Grid */}
      <div className="space-y-10 max-w-5xl mx-auto">
        {studentWorkData.map((item) => (
          <article 
            key={item.id}
            className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm"
          >
            {/* Header / Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-text-main">
                    {item.learnerHandle}
                  </span>
                  <Badge variant="brand">
                    Example build
                  </Badge>
                </div>
                <p className="text-xs font-mono text-text-sub">
                  {item.roleContext} • {item.track}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-surface-elevated border border-border-subtle px-4 py-2 rounded-xl text-right">
                  <span className="text-xs font-mono uppercase text-text-sub block">Review</span>
                  <span className="text-text-main font-mono font-bold text-sm">{item.evaluationOutcome.rubricScore}</span>
                </div>
              </div>
            </div>

            {/* Title & Problem */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-text-main">
                {item.projectTitle}
              </h2>
              <div className="p-4 bg-surface-inset border border-border-subtle rounded-xl space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold block">
                  The Problem
                </span>
                <p className="text-sm text-text-main leading-relaxed">
                  {item.problemSolved}
                </p>
              </div>
            </div>

            {/* What they built */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block">
                What They Built
              </span>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.whatTheyBuilt}
              </p>
            </div>

            {/* Tools Used */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-text-sub mr-2">Stack / Tools:</span>
              {item.toolsUsed.map((tool, tidx) => (
                <span key={tidx} className="text-xs font-mono bg-surface-elevated text-text-muted px-2.5 py-1 rounded border border-border-subtle">
                  {tool}
                </span>
              ))}
            </div>

            {/* Iteration Journey (First Attempt vs Evaluated Final) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>First attempt</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.iterationJourney.firstAttempt}
                </p>
              </div>

              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>What changed</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.iterationJourney.finalResult}
                </p>
              </div>
            </div>

            {/* Evaluation & Verified Credential */}
            <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-sub">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium">
                <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{item.evaluationOutcome.credentialIssued}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-text-muted">
                  Artifact: <strong className="text-text-main">{item.verifiedArtifactType}</strong>
                </span>
                <Button to="/credentials" size="sm" variant="ghost" className="text-cyan-600 dark:text-cyan-400">
                  View credential guidance →
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Callout to start building */}
      <div className="text-center pt-8">
        <h3 className="text-xl font-bold text-text-main mb-3">
          Ready to build your own project artifact?
        </h3>
        <Button to="/programs" variant="primary" size="lg" icon={ArrowRight}>
          Choose Your Learning Track
        </Button>
      </div>

    </div>
  );
}
