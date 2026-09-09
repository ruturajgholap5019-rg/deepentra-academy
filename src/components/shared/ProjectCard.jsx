import React, { useState } from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="premium-card flex flex-col justify-between rounded-2xl p-5 sm:p-6 group">
        <div>
          {/* Top meta */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <Badge trackId={project.trackId}>
              {project.track}
            </Badge>
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              {project.status}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-cyan-500 transition-colors">
            {project.title}
          </h3>

          {/* Problem Box */}
          <div className="mt-3.5 p-3.5 rounded-xl bg-surface-inset border border-border-subtle">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mb-1">
              Problem Statement
            </span>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Build Output */}
          <div className="mt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-0.5">
              Expected Build:
            </span>
            <p className="text-xs sm:text-sm text-text-main font-medium leading-relaxed">
              {project.build}
            </p>
          </div>

          {/* Skills Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="text-xs font-mono bg-surface-elevated text-text-muted px-2 py-0.5 rounded border border-border-subtle">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-5 pt-3.5 border-t border-border-subtle flex items-center justify-between gap-2">
          <div className="text-xs font-mono text-text-sub">
            Difficulty: <strong className="text-text-main">{project.difficulty}</strong>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsModalOpen(true)}
            icon={ArrowUpRight}
            className="text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 font-mono text-xs"
          >
            View Specification
          </Button>
        </div>
      </div>

      {/* Project Specification Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        subtitle={`${project.track} • ${project.difficulty} Challenge`}
        maxWidth="max-w-3xl"
      >
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5 font-bold">
              The Real-World Context & Problem
            </h4>
            <p className="text-text-main leading-relaxed bg-surface-inset p-3.5 rounded-xl border border-border-subtle">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-1.5 font-bold">
              System Architecture & Build Requirement
            </h4>
            <p className="text-text-main leading-relaxed bg-surface-inset p-3.5 rounded-xl border border-border-subtle">
              {project.build}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5 font-bold">
              Evaluation & Benchmarking Rubric
            </h4>
            <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
              <strong>Evaluation Standard:</strong> {project.evaluationCriteria}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-1.5 font-bold">
              Verified Submission Artifact Expected
            </h4>
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-900 dark:text-indigo-200 font-mono">
              📦 {project.expectedArtifact}
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-sub font-mono">
            <span>Submissions undergo structured rubric review.</span>
            <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
