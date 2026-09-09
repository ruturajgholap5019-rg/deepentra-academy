import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { resourcesData } from '../data/resourcesData';
import { FileText, Eye, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand">Technical Assets & Frameworks</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
          Curated Frameworks & Evaluation Rubrics
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Open-access technical specifications, evaluation scorecards, and engineering guides designed to help you benchmark your builds.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {resourcesData.map((resource) => (
          <div
            key={resource.id}
            className="bg-surface border border-border-subtle hover:border-border-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded">
                  {resource.type}
                </span>
                <span className="text-xs font-mono text-text-sub">
                  {resource.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-text-main mb-3 group-hover:text-cyan-500 transition-colors">
                {resource.title}
              </h2>

              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {resource.description}
              </p>

              <div className="p-3 bg-surface-inset rounded-xl border border-border-subtle text-xs font-mono text-text-sub">
                Format: <span className="text-text-main font-semibold">{resource.format}</span>
              </div>
            </div>

            {/* Actions: View Spec + Connected Next Step */}
            <div className="mt-6 pt-5 border-t border-border-subtle space-y-3">
              <button
                onClick={() => setSelectedDoc(resource)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-elevated hover:bg-surface text-text-main text-xs font-mono font-medium transition-colors border border-border-subtle hover:border-border-hover cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View Specification Document</span>
              </button>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-text-sub">Connected Path:</span>
                <Button
                  to={resource.nextStep.url}
                  variant="ghost"
                  size="sm"
                  icon={ArrowRight}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 p-0 text-xs"
                >
                  {resource.nextStep.label}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Specification Viewer Modal (Static, no signup) */}
      {selectedDoc && (
        <Modal
          isOpen={!!selectedDoc}
          onClose={() => setSelectedDoc(null)}
          title={selectedDoc.title}
          subtitle={`${selectedDoc.type} • Direct Presentation`}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-5">
            <div className="p-4 bg-surface-inset border border-border-subtle rounded-xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block">
                Overview & Application Scope
              </span>
              <p className="text-sm text-text-main leading-relaxed">
                {selectedDoc.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-sub font-semibold">
                Specification Key Criteria
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-text-main font-mono">
                <li className="p-3 bg-surface-inset rounded-lg border border-border-subtle flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Criterion A: Faithfulness & Grounded Context Attribution</span>
                </li>
                <li className="p-3 bg-surface-inset rounded-lg border border-border-subtle flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Criterion B: Deterministic Structured Output Compliance (Pydantic / JSON Mode)</span>
                </li>
                <li className="p-3 bg-surface-inset rounded-lg border border-border-subtle flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Criterion C: Latency Bounds (p95 &lt; 2000ms for retrieval + generation)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-sub">
              <span>Artifact file: <strong className="text-text-main">{selectedDoc.downloadFilename}</strong></span>
              <Button variant="secondary" size="sm" onClick={() => setSelectedDoc(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
