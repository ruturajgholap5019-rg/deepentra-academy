import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { publicLearnersData } from '../data/blueprintData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ShieldCheck, CheckCircle2, ExternalLink, Award, MapPin, Terminal, ArrowLeft, ArrowRight, GitBranch } from 'lucide-react';

export default function PublicProfilePage() {
  const { username } = useParams();
  const learner = publicLearnersData.find(l => l.username === username) || publicLearnersData[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Back link */}
      <div>
        <Link
          to="/student-work"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-sub hover:text-text-main transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Verified Outcomes</span>
        </Link>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-mono text-2xl font-bold flex items-center justify-center shadow-md shadow-indigo-950/20">
              {learner.avatarInitials}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-extrabold text-text-main">{learner.fullName}</h1>
                <Badge variant="verified" icon={true}>Verified Profile</Badge>
              </div>
              <p className="text-xs font-mono text-text-sub">
                @{learner.handle} • {learner.track}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <MapPin className="w-3.5 h-3.5 text-text-sub" />
                <span>{learner.location}</span>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-bold">
              {learner.level}
            </span>
            <span className="text-text-sub">{learner.xp} Total XP</span>
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed border-t border-border-subtle pt-4">
          {learner.bio}
        </p>
      </div>

      {/* Verified Skills Grid */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            Verified Skill Competencies
          </h2>
          <span className="text-xs font-mono text-text-sub">Evidence-backed</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learner.verifiedSkills.map((skill, idx) => (
            <div key={idx} className="p-3.5 bg-surface-elevated border border-border-subtle rounded-2xl flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-text-main font-mono">{skill.name}</span>
              </div>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                {skill.count} Builds Passed
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Evaluated Build Artifacts */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Evaluated Build Artifacts
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {learner.buildArtifacts.map((artifact, idx) => (
            <div key={idx} className="bg-surface border border-border-subtle rounded-2xl p-5 sm:p-6 space-y-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 font-bold">
                    {artifact.type}
                  </span>
                  <h3 className="text-base font-bold text-text-main">{artifact.title}</h3>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  Rubric: {artifact.rubricScore}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {artifact.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border-subtle">
                <div className="flex flex-wrap gap-1.5">
                  {artifact.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-xs font-mono bg-surface-inset text-text-sub px-2 py-0.5 rounded border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={artifact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-cyan-400 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Code & Tests</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Issued Credentials */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Verified Credentials
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {learner.credentials.map((cred) => (
            <div key={cred.id} className="p-4 bg-surface-elevated border border-border-subtle rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-text-main block">{cred.title}</span>
                <span className="text-xs font-mono text-text-sub">Issued: {cred.date} • ID: {cred.id}</span>
              </div>
              <Link
                to={`/credentials/${cred.id}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Verify Credential Record</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
