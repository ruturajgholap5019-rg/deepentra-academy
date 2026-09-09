import React from 'react';
import { Link } from 'react-router-dom';
import { credentialsData } from '../../data/blueprintData';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Award, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function CertificatesHubPage() {
  const learnerCreds = credentialsData.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-sub hover:text-text-main transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to My Academy Dashboard</span>
        </Link>
      </div>

      <div className="space-y-2">
        <Badge variant="verified" icon={true}>Proof of Skill Registry</Badge>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main">
          My Verified Credentials & Certificates
        </h1>
        <p className="text-sm text-text-muted">
          All certificates issued by Deepentra Academy are anchored to audited capstone projects and public rubric scores.
        </p>
      </div>

      <div className="space-y-4">
        {learnerCreds.map((cred) => (
          <div
            key={cred.id}
            className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:border-border-hover transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 block uppercase">
                  {cred.track}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-text-main">
                  {cred.programTitle}
                </h2>
                <span className="text-xs font-mono text-text-sub">Credential ID: {cred.id}</span>
              </div>

              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-center">
                {cred.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 bg-surface-inset rounded-xl border border-border-subtle">
                <span className="text-text-sub uppercase block mb-1">Evaluated Capstone</span>
                <span className="text-text-main font-bold block">{cred.capstoneProject}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mt-1">Rubric Score: {cred.overallScore}</span>
              </div>

              <div className="p-3.5 bg-surface-inset rounded-xl border border-border-subtle">
                <span className="text-text-sub uppercase block mb-1">Verification Hash</span>
                <span className="text-text-main block break-all">{cred.verificationHash}</span>
                <span className="text-text-sub block mt-1">Issued: {cred.issueDate}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                to={`/credentials/${cred.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                <span>Open Public Verification Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <Button
                to={`/credentials/${cred.id}`}
                variant="primary"
                size="sm"
                icon={Award}
              >
                View Credential Certificate
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
