import React from 'react';
import { BookOpen, PlayCircle, Hammer, CheckSquare, Award, ArrowUpRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    label: "LEARN",
    desc: "Understand concepts, tools and mental models needed for the task.",
    proofObject: "Architecture Blueprint",
    icon: BookOpen,
    accent: "text-sky-600 dark:text-sky-400 border-sky-500/30 bg-sky-500/10"
  },
  {
    num: "02",
    label: "PRACTICE",
    desc: "Use ideas in guided exercises and realistic failure-mode drills.",
    proofObject: "Lab Notebook & Drills",
    icon: PlayCircle,
    accent: "text-indigo-600 dark:text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
  },
  {
    num: "03",
    label: "BUILD",
    desc: "Create something tangible: a workflow, prototype, or production app.",
    proofObject: "Code / Automation Pipeline",
    icon: Hammer,
    accent: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
  },
  {
    num: "04",
    label: "GET EVALUATED",
    desc: "Receive structured feedback against strict project rubric standards.",
    proofObject: "Scorecard & PR Review",
    icon: CheckSquare,
    accent: "text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/10"
  },
  {
    num: "05",
    label: "PROVE",
    desc: "Turn work into public evidence, credentials and verified proof.",
    proofObject: "Verified Skill Hash",
    icon: Award,
    accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    num: "06",
    label: "PROGRESS",
    desc: "Use evidence to unlock studio client projects and opportunities.",
    proofObject: "Studio & Ecosystem Roster",
    icon: ArrowUpRight,
    accent: "text-indigo-600 dark:text-indigo-300 border-indigo-400/30 bg-indigo-400/10"
  }
];

export default function DeepentraMethodDiagram() {
  return (
    <div className="w-full">
      {/* Desktop Timeline (Grid) */}
      <div className="hidden lg:grid grid-cols-6 gap-3 relative">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 -translate-y-8 z-0 pointer-events-none" />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative z-10 flex flex-col justify-between bg-surface border border-border-subtle hover:border-border-hover p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-xs font-bold text-text-sub bg-surface-inset px-2 py-0.5 rounded border border-border-subtle">
                    {step.num}
                  </span>
                  <div className={`p-1.5 rounded-lg border ${step.accent}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="font-mono text-xs font-bold tracking-wider text-text-main group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                  {step.label}
                </h4>
                <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-text-sub block mb-0.5">
                  Proof:
                </span>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-medium block">
                  {step.proofObject}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Vertical Timeline */}
      <div className="lg:hidden space-y-3 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-border-subtle before:z-0">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="relative z-10 flex items-start gap-3">
              <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border bg-surface ${step.accent}`}>
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 bg-surface border border-border-subtle p-3.5 rounded-xl shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-mono text-xs font-bold text-text-main">
                    {step.num} — {step.label}
                  </h4>
                </div>
                <p className="mt-1 text-xs text-text-muted leading-relaxed">
                  {step.desc}
                </p>
                <div className="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-text-sub">Proof:</span>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                    {step.proofObject}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
