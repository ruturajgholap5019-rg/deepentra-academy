import React, { useState } from 'react';
import { initialFacultyState } from '../../data/blueprintData';
import Button from '../../components/ui/Button';
import { 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw, 
  FileCheck2
} from 'lucide-react';

export default function FacultyPortalPage() {
  const [facultyData, setFacultyData] = useState(initialFacultyState);
  const [manualName, setManualName] = useState('');
  const [reviewedItems, setReviewedItems] = useState({});

  const handleManualCheckIn = (e) => {
    e.preventDefault();
    if (!manualName.trim()) return;

    const newRecord = {
      id: `usr-${Date.now()}`,
      name: manualName.trim(),
      time: 'Just now',
      verified: true
    };

    setFacultyData(prev => ({
      ...prev,
      activeSession: {
        ...prev.activeSession,
        checkedInCount: prev.activeSession.checkedInCount + 1,
        checkInList: [newRecord, ...prev.activeSession.checkInList]
      }
    }));
    setManualName('');
  };

  const handleRegenerateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setFacultyData(prev => ({
      ...prev,
      activeSession: {
        ...prev.activeSession,
        code: newCode
      }
    }));
  };

  const handleApproveSubmission = (id) => {
    setReviewedItems(prev => ({
      ...prev,
      [id]: 'Approved & Credential Issued'
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Portal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold font-mono">
            FO
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">
              Faculty & Operations Surface
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-text-main">
              Cohort Session & Review Operations
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1 rounded-xl bg-surface border border-border-subtle text-emerald-600 dark:text-emerald-400 font-bold">
            ● Faculty Active
          </span>
        </div>
      </div>

      {/* 01 — TODAY'S LIVE SESSION ATTENDANCE GENERATOR (PDF Section 6.1) */}
      <div className="bg-surface border-2 border-indigo-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold block">
              Active Live Classroom Session
            </span>
            <h2 className="text-xl font-bold text-text-main">
              {facultyData.activeSession.topic}
            </h2>
            <p className="text-xs font-mono text-text-sub mt-0.5">
              {facultyData.activeSession.cohortName} • {facultyData.activeSession.dateToday}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={RefreshCw}
              onClick={handleRegenerateCode}
            >
              Rotate Dynamic Token
            </Button>
          </div>
        </div>

        {/* Dynamic Token Projector Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-elevated border border-indigo-500/20 rounded-2xl flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-xs font-mono uppercase text-text-sub block font-semibold">
              Projector Classroom Token
            </span>
            <span className="text-4xl sm:text-5xl font-mono font-extrabold text-indigo-600 dark:text-indigo-400 tracking-widest block py-1">
              {facultyData.activeSession.code}
            </span>
            <p className="text-[11px] text-text-muted">
              Display to learners. Code expires at session close to prevent remote sharing.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated border border-border-subtle rounded-2xl flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-mono uppercase text-text-sub block font-semibold">
                Live Attendance Rate
              </span>
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mt-1">
                {facultyData.activeSession.checkedInCount} / {facultyData.activeSession.enrolledLearners}
              </span>
              <span className="text-xs font-mono text-text-muted">Learners checked in</span>
            </div>

            {/* Manual check-in form */}
            <form onSubmit={handleManualCheckIn} className="flex gap-2">
              <input
                type="text"
                placeholder="Manual add learner..."
                value={manualName}
                onChange={(e) => setManualName(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-xs text-text-main focus:outline-none"
              />
              <Button type="submit" variant="primary" size="sm">
                Add
              </Button>
            </form>
          </div>

          {/* Real-time checked in roster */}
          <div className="p-4 bg-surface-inset rounded-2xl border border-border-subtle space-y-2 max-h-48 overflow-y-auto text-xs font-mono">
            <span className="text-text-sub uppercase font-bold block mb-1">
              Live Check-In Stream
            </span>
            {facultyData.activeSession.checkInList.map((usr) => (
              <div key={usr.id} className="flex items-center justify-between p-1.5 bg-surface rounded-lg border border-border-subtle">
                <span className="font-sans text-text-main">{usr.name}</span>
                <span className="text-text-sub text-[11px]">{usr.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 02 — PENDING ASSIGNMENT REVIEW QUEUE (PDF Section 6.3) */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Submission Review Queue
            </h2>
            <p className="text-xs text-text-muted">
              AI pre-evaluation completed. Requires human faculty verification for credential claims.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
            {facultyData.reviewQueue.length} Pending
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {facultyData.reviewQueue.map((item) => (
            <div key={item.id} className="p-5 bg-surface-elevated border border-border-subtle rounded-2xl space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-3">
                <div>
                  <h3 className="text-base font-bold text-text-main">{item.studentName}</h3>
                  <span className="text-xs font-mono text-text-sub">{item.studentEmail} • Submitted {item.submittedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    AI Pre-Check: {item.aiPreCheckScore}
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <span className="font-bold text-text-main block">{item.assignmentTitle}</span>
                <p className="text-text-muted font-mono">{item.aiSummary}</p>
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-indigo-600 dark:text-cyan-400 hover:underline pt-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{item.repoUrl}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border-subtle">
                {reviewedItems[item.id] ? (
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> {reviewedItems[item.id]}
                  </span>
                ) : (
                  <>
                    <span className="text-xs font-mono text-text-sub">Action required by faculty reviewer</span>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => alert('Resubmission feedback request sent to student.')}
                      >
                        Request Revision
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        icon={CheckCircle2}
                        onClick={() => handleApproveSubmission(item.id)}
                      >
                        Approve & Issue Credential
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
