import React from 'react';
import { CheckCircle2, ShieldCheck, Terminal, Award, Code2 } from 'lucide-react';
import Badge from '../ui/Badge';

export default function LearnerProfilePreview() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-surface border border-border-subtle rounded-2xl shadow-xl shadow-indigo-950/10 overflow-hidden transition-colors duration-200">
      {/* Top simulated profile header bar */}
      <div className="p-5 sm:p-6 bg-surface-elevated/70 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono text-lg font-bold text-indigo-600 dark:text-indigo-300">
            AR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-text-main">
                Aravind Radhakrishnan
              </h3>
              <Badge variant="verified">
                Verified Identity
              </Badge>
            </div>
            <p className="text-xs font-mono text-text-sub mt-0.5">
              id: <span className="text-indigo-600 dark:text-cyan-400">da_usr_9941a8</span> • Focus: AI Systems & Autonomous Agents
            </p>
          </div>
        </div>

        {/* Credential summary status */}
        <div className="flex items-center gap-3 bg-surface border border-border-subtle px-3.5 py-2 rounded-xl font-mono text-xs">
          <div>
            <span className="text-text-sub block text-[10px] uppercase">Evaluated Builds</span>
            <span className="text-text-main font-bold text-xs sm:text-sm">4 Projects Passed</span>
          </div>
          <div className="w-px h-7 bg-border-subtle mx-1" />
          <div>
            <span className="text-text-sub block text-[10px] uppercase">Avg Rubric Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">93.5%</span>
          </div>
        </div>
      </div>

      {/* Profile Body */}
      <div className="p-5 sm:p-6 space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-text-main font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Verified Competency Hashes
            </span>
            <span className="text-[11px] font-mono text-text-sub">
              Evaluated against industry standards
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { skill: "Hybrid RAG Systems", score: "96%" },
              { skill: "Vector DB Partitioning (Qdrant)", score: "92%" },
              { skill: "Pydantic Deterministic Schemas", score: "95%" },
              { skill: "Agentic Tool Loops (LangGraph)", score: "89%" },
              { skill: "Hallucination Benchmark Auditing", score: "94%" },
            ].map((s, idx) => (
              <div key={idx} className="bg-surface-inset border border-border-subtle rounded-lg px-2.5 py-1 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs text-text-main font-mono">{s.skill}</span>
                <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                  {s.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluated Build Artifacts Trail */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-text-main font-bold block mb-2.5">
            Compounding Project Evidence Trail
          </span>
          <div className="space-y-2.5">
            <div className="p-3.5 bg-surface-inset border border-border-subtle rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-text-main">
                    Production RAG API with Automated Faithfulness Testing
                  </h4>
                  <p className="text-xs text-text-sub font-mono">
                    Evaluation: 32 synthetic test queries • 0.8s latency p95 • Passed PR code review
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 self-start sm:self-center font-bold">
                Rubric: 96 / 100
              </span>
            </div>

            <div className="p-3.5 bg-surface-inset border border-border-subtle rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-text-main">
                    Autonomous Multi-Source SQL Synthesis Agent
                  </h4>
                  <p className="text-xs text-text-sub font-mono">
                    Evaluation: Sandboxed SQLite execution • Human approval step • Strict token bounds
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 self-start sm:self-center font-bold">
                Rubric: 91 / 100
              </span>
            </div>
          </div>
        </div>

        {/* Bottom indicator note */}
        <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-sub font-mono">
          <span className="flex items-center gap-1.5 text-text-muted">
            <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            Evidence profile visible to partner engineering teams and studio projects
          </span>
          <span className="text-text-sub">Public Evidence Concept</span>
        </div>
      </div>
    </div>
  );
}
