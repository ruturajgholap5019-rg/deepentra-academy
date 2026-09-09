import React, { useState } from 'react';
import { ArrowRight, Clock3 } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

export default function WorkshopCard({ workshop }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="premium-card group rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge trackId={workshop.trackId}>{workshop.track}</Badge>
          <span className="text-xs text-text-sub">{workshop.format}</span>
        </div>
        <h3 className="mt-5 text-lg font-bold text-text-main group-hover:text-indigo-600 dark:group-hover:text-indigo-300">{workshop.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-text-sub">
          <Clock3 className="h-3.5 w-3.5" /> {workshop.duration}
          <span>•</span>
          <span>{workshop.upcomingDates}</span>
        </div>
        <p className="mt-4 text-sm leading-6 text-text-muted">{workshop.problemStatement}</p>
        <div className="mt-4 rounded-xl bg-indigo-500/5 p-3.5 text-sm font-medium text-text-main ring-1 ring-indigo-500/10">
          <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">Takeaway</span>
          <span className="mt-1 block">{workshop.tangibleOutput}</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
          <span className="text-xs font-medium text-text-sub">{workshop.status}</span>
          <Button size="sm" variant="secondary" icon={ArrowRight} onClick={() => setIsModalOpen(true)}>See details</Button>
        </div>
      </article>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={workshop.title} subtitle={`${workshop.duration} • ${workshop.format}`}>
        <div className="space-y-5 text-sm">
          <div>
            <h4 className="font-semibold text-text-main">What you will build</h4>
            <p className="mt-1.5 leading-6 text-text-muted">{workshop.whatYouWillDo}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text-main">Skills covered</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {workshop.skillsCovered.map((skill) => <span key={skill} className="rounded-lg border border-border-subtle bg-surface-inset px-2.5 py-1 text-xs text-text-muted">{skill}</span>)}
            </div>
          </div>
          <div className="rounded-xl border border-border-subtle bg-surface-inset p-4">
            <p className="font-medium text-text-main">Output</p>
            <p className="mt-1 text-text-muted">{workshop.tangibleOutput}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
