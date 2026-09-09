import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { credentialsData } from '../data/blueprintData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ShieldCheck, CheckCircle2, Search, ExternalLink, ArrowRight, Award, Calendar, Hash } from 'lucide-react';

export default function CredentialVerificationPage() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState(id || '');
  const [currentId, setCurrentId] = useState(id || 'DA-2026-RAG-8941');

  const credential = credentialsData.find(c => c.id.toLowerCase() === currentId.toLowerCase()) || credentialsData[0];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentId(searchQuery.trim());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="verified" icon={true}>Official Registry</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
          Deepentra Credential Verification
        </h1>
        <p className="text-base text-text-muted max-w-xl mx-auto">
          Every Deepentra credential is cryptographically anchored to evaluated project code, rubrics, and verified faculty review.
        </p>
      </div>

      {/* Lookup Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-lg mx-auto">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-text-sub absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Credential ID (e.g. DA-2026-RAG-8941)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-indigo-500 focus:outline-none text-text-main font-mono text-sm placeholder:text-text-sub shadow-sm"
          />
        </div>
        <Button type="submit" variant="primary" size="md">
          Verify
        </Button>
      </form>

      {/* Sample Quick Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-text-sub">
        <span>Try verified examples:</span>
        {credentialsData.map(c => (
          <button
            key={c.id}
            onClick={() => { setSearchQuery(c.id); setCurrentId(c.id); }}
            className={`px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
              currentId.toLowerCase() === c.id.toLowerCase()
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-bold'
                : 'bg-surface border-border-subtle hover:bg-surface-elevated text-text-muted'
            }`}
          >
            {c.id}
          </button>
        ))}
      </div>

      {/* Credential Certificate Card */}
      {credential ? (
        <div className="bg-surface border-2 border-indigo-500/20 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden">
          {/* Subtle decorative watermark */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none">
            <img src="/brand/deepentra-logo.png" alt="" className="w-64 h-64 object-contain" />
          </div>

          {/* Top Status & Brand Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
            <div className="flex items-center gap-3">
              <img src="/brand/deepentra-logo.png" alt="Deepentra" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold block">
                  Deepentra Academy Certified
                </span>
                <span className="text-xs text-text-sub font-mono">ID: {credential.id}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {credential.status}
              </span>
            </div>
          </div>

          {/* Main Credential Info */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-text-sub block">This certifies that</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              {credential.learnerName}
            </h2>
            <p className="text-base text-text-muted leading-relaxed">
              has successfully satisfied all rigorous practical evaluation requirements and defended a verified build artifact in:
            </p>
            <div className="p-4 rounded-2xl bg-surface-elevated border border-border-subtle">
              <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold block mb-1">
                {credential.track}
              </span>
              <h3 className="text-lg font-bold text-text-main">
                {credential.programTitle}
              </h3>
            </div>
          </div>

          {/* Evaluated Build Artifact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-sub font-bold">
              Verified Capstone Build
            </h4>
            <div className="p-4 rounded-2xl bg-surface-inset border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-text-main block">{credential.capstoneProject}</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Overall Rubric Score: {credential.overallScore}
                </span>
              </div>
              {credential.artifactUrl && (
                <a
                  href={credential.artifactUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-cyan-400 hover:underline shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Artifact</span>
                </a>
              )}
            </div>
          </div>

          {/* Rubric Evaluation Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-sub font-bold">
              Public Rubric Criteria & Scores
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {credential.rubricEvaluation.map((r, idx) => (
                <div key={idx} className="p-3 bg-surface-elevated border border-border-subtle rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-bold text-text-main block">{r.criterion} <span className="text-text-sub font-normal">({r.weight})</span></span>
                    <p className="text-text-muted font-sans mt-0.5">{r.notes}</p>
                  </div>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Hash & Signature Bar */}
          <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-text-sub">
            <div>
              <span className="text-[11px] uppercase block text-text-sub mb-0.5">Verification Hash</span>
              <span className="text-text-main font-mono break-all">{credential.verificationHash}</span>
            </div>
            <div className="sm:text-right">
              <span className="text-[11px] uppercase block text-text-sub mb-0.5">Date Issued & Verified By</span>
              <span className="text-text-main font-sans block">{credential.issueDate}</span>
              <span className="text-text-muted text-[11px]">{credential.verifiedBy}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/students/${credential.username}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>View Student Proof-of-Work Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.print()}
            >
              Print Verification Record
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center bg-surface border border-border-subtle rounded-3xl space-y-3">
          <p className="text-text-main font-bold">Credential not found in registry.</p>
          <p className="text-xs text-text-muted">Please verify the ID format (e.g. DA-2026-RAG-8941).</p>
        </div>
      )}
    </div>
  );
}
