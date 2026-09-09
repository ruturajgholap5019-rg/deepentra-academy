import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialLearnerState } from '../../data/blueprintData';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  UploadCloud, 
  Sparkles, 
  FileCode, 
  Terminal
} from 'lucide-react';

export default function ProgramWorkspacePage() {
  const { programId: _programId } = useParams();
  const [activeTab, setActiveTab] = useState('assignments');
  const [repoInput, setRepoInput] = useState('https://github.com/aravind-r/agent-tool-calling-exercise');
  const [aiChecking, setAiChecking] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSimulateAiEval = (e) => {
    e.preventDefault();
    setAiChecking(true);
    setTimeout(() => {
      setAiChecking(false);
      setSubmissionResult({
        score: "93 / 100",
        passed: true,
        criteria: [
          { name: "Pydantic Schema Strictness", score: "96 / 100", notes: "Zero schema violations across 15 synthetic payloads." },
          { name: "Error Recovery Loop", score: "92 / 100", notes: "Self-correction re-prompts correctly on malformed JSON." },
          { name: "Unit Tests & Fixtures", score: "91 / 100", notes: "Pytest fixtures covers edge cases and token bounds." }
        ],
        aiSummary: "AI Pre-Check Passed: Code is ready for faculty verification review.",
        status: "Submitted — In Faculty Queue"
      });
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Back Link */}
      <div>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-sub hover:text-text-main transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to My Academy Dashboard</span>
        </Link>
      </div>

      {/* Program Header */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="brand">Program Workspace</Badge>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
            Cohort Active • Pune Weekend Cohort A
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main">
          Agentic AI & Production Systems Engineering
        </h1>

        <p className="text-sm text-text-muted max-w-3xl leading-relaxed">
          The central operating environment for your curriculum modules, attendance records, code submissions, and rubric evaluations.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
          {[
            { id: 'assignments', label: 'Assignments & Submissions' },
            { id: 'curriculum', label: 'Curriculum & Modules' },
            { id: 'sessions', label: 'Live Sessions & Attendance' },
            { id: 'resources', label: 'Starter Repos & Datasets' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm font-bold'
                  : 'bg-surface-elevated text-text-muted hover:text-text-main border border-border-subtle'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}

      {/* TAB 1: ASSIGNMENTS & AI EVALUATION */}
      {activeTab === 'assignments' && (
        <div className="space-y-6">
          <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
              <div>
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase block">
                  Active Assignment 03
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-text-main">
                  Deterministic Tool Calling with Custom Pydantic Validators
                </h2>
              </div>
              <span className="text-xs font-mono text-text-sub">Due: Sep 12, 2026 (in 2 days)</span>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSimulateAiEval} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-text-sub block font-semibold">
                  GitHub Repository / Artifact URL
                </label>
                <div className="relative">
                  <FileCode className="w-4 h-4 text-text-sub absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    value={repoInput}
                    onChange={(e) => setRepoInput(e.target.value)}
                    required
                    placeholder="https://github.com/username/project-repo"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-inset border border-border-subtle focus:border-indigo-500 focus:outline-none text-text-main font-mono text-xs shadow-sm"
                  />
                </div>
              </div>

              <div className="p-4 bg-surface-inset border border-border-subtle rounded-2xl space-y-2 text-xs">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold block">
                  Automated Rubric Pre-Check Workflow
                </span>
                <p className="text-text-muted">
                  Submitting triggers the Deepentra AI pre-evaluator, which executes unit tests and checks schema bounds before forwarding to faculty for human verification.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={aiChecking}
                  icon={Sparkles}
                >
                  {aiChecking ? 'Running Automated AI Rubric Pre-check...' : 'Submit & Run AI Pre-Check'}
                </Button>
              </div>
            </form>

            {/* Submission Result / Simulated Feedback */}
            {submissionResult && (
              <div className="p-6 bg-surface-elevated border-2 border-emerald-500/30 rounded-2xl space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-base font-bold text-text-main">AI Pre-Check Passed</h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    Pre-score: {submissionResult.score}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-text-muted">
                  {submissionResult.aiSummary}
                </p>

                <div className="space-y-2 pt-2 border-t border-border-subtle">
                  <span className="text-xs font-mono uppercase text-text-sub font-bold block">Rubric Criteria Results:</span>
                  {submissionResult.criteria.map((c, i) => (
                    <div key={i} className="p-3 bg-surface rounded-xl border border-border-subtle flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-text-main block">{c.name}</strong>
                        <span className="text-text-muted">{c.notes}</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 ml-4">{c.score}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs font-mono text-text-sub pt-1">
                  Status: <strong className="text-indigo-600 dark:text-indigo-400">{submissionResult.status}</strong> (Faculty review usually within 24h).
                </div>
              </div>
            )}
          </div>

          {/* Previous Evaluated Assignments */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase text-text-sub font-bold">
              Previous Evaluated Submissions
            </h3>

            <div className="space-y-3">
              {initialLearnerState.assignments.filter(a => a.status === 'Graded & Verified').map((asg) => (
                <div key={asg.id} className="p-5 bg-surface border border-border-subtle rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <h4 className="text-sm font-bold text-text-main">{asg.title}</h4>
                    </div>
                    <p className="text-xs text-text-muted">{asg.module} • Submitted {asg.submittedDate}</p>
                    <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">{asg.aiFeedback}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 block">
                      Score: {asg.score}
                    </span>
                    <span className="text-[11px] text-text-sub font-mono block mt-1">Verified by Faculty</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CURRICULUM */}
      {activeTab === 'curriculum' && (
        <div className="space-y-4">
          {[
            { phase: "Module 01", title: "Production Hybrid RAG & Vector Partitioning", status: "Completed (100%)", sessions: 4 },
            { phase: "Module 02", title: "Deterministic Chunking & Benchmark Eval Suites", status: "Completed (100%)", sessions: 4 },
            { phase: "Module 03", title: "Agentic Tool Loops & State Machine Execution", status: "In Progress (50%)", sessions: 4 },
            { phase: "Module 04", title: "Multi-Agent Orchestration with LangGraph", status: "Locked (Opens Sep 16)", sessions: 4 },
            { phase: "Module 05", title: "Capstone Build & Public Rubric Defense", status: "Locked", sessions: 4 }
          ].map((m, idx) => (
            <div key={idx} className="p-5 bg-surface border border-border-subtle rounded-2xl flex items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{m.phase}</span>
                <h3 className="text-base font-bold text-text-main">{m.title}</h3>
                <p className="text-xs text-text-muted font-mono">{m.sessions} practical lab sessions with code exercises</p>
              </div>
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                m.status.includes('Completed')
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                  : m.status.includes('In Progress')
                  ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
                  : 'bg-surface-elevated text-text-sub border-border-subtle'
              }`}>
                {m.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: LIVE SESSIONS & ATTENDANCE */}
      {activeTab === 'sessions' && (
        <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-text-main">Live Classroom & Online Sessions</h3>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">Attendance: 100% (4/4)</span>
          </div>

          <div className="space-y-3">
            {[
              { num: "01", title: "Sparse vs Dense Retrieval Architecture", date: "Aug 15", attended: true },
              { num: "02", title: "Benchmarking RAG with Synthetic Evals", date: "Aug 22", attended: true },
              { num: "03", title: "Embedding Cache & Routing Pipelines", date: "Aug 29", attended: true },
              { num: "04", title: "Deterministic Output Guarantees with Pydantic", date: "Sep 05", attended: true },
              { num: "05", title: "Tool Calling, ReAct Loops & LangGraph", date: "Today (Sep 09)", attended: false, activeToday: true }
            ].map((sess, idx) => (
              <div key={idx} className="p-4 bg-surface-elevated border border-border-subtle rounded-2xl flex items-center justify-between text-xs font-mono">
                <div className="space-y-0.5">
                  <span className="font-bold text-text-main block">Session {sess.num}: {sess.title}</span>
                  <span className="text-text-sub font-sans">{sess.date}</span>
                </div>
                {sess.attended ? (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Attended
                  </span>
                ) : sess.activeToday ? (
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Live Check-in Open
                  </span>
                ) : (
                  <span className="text-text-sub">Upcoming</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: RESOURCES */}
      {activeTab === 'resources' && (
        <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-text-main">Official Program Starter Repos & Specs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Deepentra RAG Benchmark Starter Kit", type: "GitHub Template", desc: "FastAPI + Qdrant + Ragas pre-configured test harness." },
              { name: "Agent State Machine Skeleton (LangGraph)", type: "Code Architecture", desc: "Clean node definitions with deterministic retry bounds." },
              { name: "Synthetic Query Generation Promptbook", type: "Specification", desc: "50 edge-case queries to evaluate retrieval precision." }
            ].map((r, i) => (
              <div key={i} className="p-4 bg-surface-elevated border border-border-subtle rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 block">{r.type}</span>
                <h4 className="text-sm font-bold text-text-main">{r.name}</h4>
                <p className="text-xs text-text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
