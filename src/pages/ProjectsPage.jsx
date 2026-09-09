import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/shared/ProjectCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projectsData } from '../data/projectsData';
import { tracksData } from '../data/tracksData';
import { Terminal, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const filteredProjects = selectedTrack === 'all'
    ? projectsData
    : projectsData.filter(p => p.trackId === selectedTrack);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand">Build & Explore</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight">
          Projects that make the learning concrete
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Explore the kinds of practical problems learners work on across the three Deepentra tracks. Each brief starts with a problem, a build, and a clear way to review the result.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-surface border border-border-subtle rounded-2xl max-w-xl mx-auto shadow-sm">
        <button
          onClick={() => setSelectedTrack('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            selectedTrack === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm font-semibold'
              : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
          }`}
        >
          All Projects ({projectsData.length})
        </button>
        {tracksData.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTrack(t.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedTrack === t.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm font-semibold'
                : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Submission Standards & Review Note */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-text-main">
              How Project Evaluations Work at Deepentra
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Every project starts with a clear problem and review criteria. The goal is to make the work explainable, testable, and useful—not just another tutorial clone.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-text-sub">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Clear review criteria
              </span>
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Human feedback
              </span>
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Evidence of the build
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
