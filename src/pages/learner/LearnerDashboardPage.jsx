import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initialLearnerState } from '../../data/blueprintData';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  Zap, 
  ArrowRight
} from 'lucide-react';

export default function LearnerDashboardPage() {
  const [learner, setLearner] = useState(initialLearnerState);
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [attendanceSuccess, setAttendanceSuccess] = useState(false);

  const handleCheckIn = (e) => {
    e.preventDefault();
    if (tokenInput.trim() === learner.currentProgram.nextSession.activeToken) {
      setAttendanceSuccess(true);
      setLearner(prev => ({
        ...prev,
        xp: prev.xp + 50,
        currentProgram: {
          ...prev.currentProgram,
          attendancePct: Math.min(100, prev.currentProgram.attendancePct + 2)
        }
      }));
      setTimeout(() => {
        setAttendanceModalOpen(false);
        setAttendanceSuccess(false);
        setTokenInput('');
      }, 1500);
    } else {
      alert('Invalid session code. Try 749201 (Today\'s live session token).');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Top Banner: Surface identification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold font-mono">
            LA
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold">
              Learner Platform
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-text-main">
              My Academy Dashboard
            </h1>
          </div>
        </div>

        {/* Quick Surface Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <Link
            to="/app/certificates"
            className="px-3 py-1.5 rounded-xl bg-surface border border-border-subtle hover:bg-surface-elevated text-text-muted hover:text-text-main transition-colors"
          >
            My Credentials
          </Link>
          <Link
            to="/students/aravind-r"
            className="px-3 py-1.5 rounded-xl bg-surface border border-border-subtle hover:bg-surface-elevated text-text-muted hover:text-text-main transition-colors"
          >
            Public Profile Preview
          </Link>
        </div>
      </div>

      {/* 01 — NEXT ACTIONS ("WHAT SHOULD I DO NEXT?") */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono uppercase tracking-wider text-text-sub font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            Next Actions (Priority Queue)
          </h2>
          <span className="text-xs font-mono text-text-sub">Action items requiring attention</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live Attendance Prompt */}
          <div className="bg-gradient-to-br from-indigo-500/10 via-surface to-surface border-2 border-indigo-500/30 rounded-2xl p-5 space-y-3 shadow-sm flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  <QrCode className="w-3.5 h-3.5" />
                  Live Attendance Check-in
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">Open Today</span>
              </div>
              <h3 className="text-base font-bold text-text-main">
                {learner.currentProgram.nextSession.title}
              </h3>
              <p className="text-xs text-text-muted">
                {learner.currentProgram.nextSession.room} • {learner.currentProgram.nextSession.date}
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              icon={QrCode}
              onClick={() => setAttendanceModalOpen(true)}
              className="w-full sm:w-auto self-start mt-2"
            >
              Enter Session Token or Scan QR
            </Button>
          </div>

          {/* Pending Assignment Card */}
          <div className="bg-surface border border-border-subtle rounded-2xl p-5 space-y-3 shadow-sm flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  Assignment Due in 2 Days
                </span>
                <span className="text-xs font-mono text-text-sub">Module 03</span>
              </div>
              <h3 className="text-base font-bold text-text-main">
                Deterministic Tool Calling with Custom Pydantic Validators
              </h3>
              <p className="text-xs text-text-muted">
                Build and submit an error-recovery agent with strict schema validation. Includes instant AI pre-check.
              </p>
            </div>

            <Button
              to={`/app/workspace/${learner.currentProgram.id}`}
              variant="secondary"
              size="sm"
              icon={ArrowRight}
              className="w-full sm:w-auto self-start mt-2"
            >
              Open Assignment & Rubric
            </Button>
          </div>
        </div>
      </div>

      {/* 02 — CONTINUE LEARNING HERO CARD */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold block">
              Active Enrolled Program
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-main">
              {learner.currentProgram.title}
            </h2>
            <p className="text-xs font-mono text-text-sub">
              {learner.currentProgram.cohortName} • Track: {learner.currentProgram.track}
            </p>
          </div>

          <Button
            to={`/app/workspace/${learner.currentProgram.id}`}
            variant="primary"
            size="md"
            icon={PlayCircle}
          >
            Launch Program Workspace
          </Button>
        </div>

        {/* Progress Bar & Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-text-muted">Syllabus Completion</span>
            <span className="font-bold text-text-main">{learner.currentProgram.progressPercent}% Complete</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-surface-inset overflow-hidden border border-border-subtle">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-500"
              style={{ width: `${learner.currentProgram.progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 03 — SNAPSHOT STATS (XP, LEVEL, SKILLS, ATTENDANCE) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-surface border border-border-subtle rounded-2xl space-y-1 shadow-sm">
          <span className="text-xs font-mono uppercase text-text-sub block">Level & XP</span>
          <span className="text-lg sm:text-xl font-extrabold text-text-main block">Level {learner.stats.level}</span>
          <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{learner.stats.totalXp} XP Points</span>
        </div>

        <div className="p-4 bg-surface border border-border-subtle rounded-2xl space-y-1 shadow-sm">
          <span className="text-xs font-mono uppercase text-text-sub block">Verified Skills</span>
          <span className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 block">
            {learner.stats.verifiedSkillsCount} Verified
          </span>
          <span className="text-xs font-mono text-text-sub">Rubric Graded</span>
        </div>

        <div className="p-4 bg-surface border border-border-subtle rounded-2xl space-y-1 shadow-sm">
          <span className="text-xs font-mono uppercase text-text-sub block">Build Artifacts</span>
          <span className="text-lg sm:text-xl font-extrabold text-cyan-600 dark:text-cyan-400 block">
            {learner.stats.completedProjects} Projects
          </span>
          <span className="text-xs font-mono text-text-sub">In Public Profile</span>
        </div>

        <div className="p-4 bg-surface border border-border-subtle rounded-2xl space-y-1 shadow-sm">
          <span className="text-xs font-mono uppercase text-text-sub block">Attendance</span>
          <span className="text-lg sm:text-xl font-extrabold text-text-main block">100%</span>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">4 / 4 Validated</span>
        </div>
      </div>

      {/* Attendance Check-in Modal */}
      <Modal
        isOpen={attendanceModalOpen}
        onClose={() => setAttendanceModalOpen(false)}
        title="Live Session Attendance Check-in"
        subtitle="Pune Weekend Cohort A • Session 05"
      >
        {attendanceSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-text-main">Attendance Recorded!</h4>
            <p className="text-xs text-text-muted">
              Your verified attendance has been logged and added to your permanent cohort record (+20 XP).
            </p>
          </div>
        ) : (
          <form onSubmit={handleCheckIn} className="space-y-4">
            <div className="p-4 bg-surface-inset rounded-xl border border-border-subtle space-y-2 text-xs">
              <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold block">
                Session: Tool Calling & LangGraph State Machines
              </span>
              <p className="text-text-muted">
                Enter the 6-digit dynamic token displayed by the faculty member on the classroom projector screen.
              </p>
              <p className="text-text-sub font-mono">
                (Demo Token: <strong className="text-text-main">749201</strong>)
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-text-sub block">6-Digit Session Token</label>
              <input
                type="text"
                maxLength="6"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="749201"
                required
                className="w-full tracking-widest text-center text-2xl font-mono py-3 rounded-xl bg-surface border border-border-subtle focus:border-indigo-500 focus:outline-none text-text-main font-bold shadow-sm"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="secondary" size="sm" onClick={() => setAttendanceModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Confirm Attendance
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
