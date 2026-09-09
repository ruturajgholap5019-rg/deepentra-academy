import React, { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles, Ticket } from 'lucide-react';
import Button from '../components/ui/Button';
import { eventsData } from '../data/eventsData';

const filters = ['All', 'Hackathons', 'Workshops', 'Webinars', 'Technical Labs'];

export default function EventsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return eventsData;
    return eventsData.filter((event) => {
      if (filter === 'Hackathons') return event.type === 'Hackathon';
      if (filter === 'Workshops') return event.type === 'Workshop';
      if (filter === 'Webinars') return event.type === 'Webinar';
      return event.type === 'Technical Lab';
    });
  }, [filter]);

  const featured = eventsData[0];

  return (
    <div className="pb-20">
      <section className="technical-grid relative overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-[1280px] px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Hackathons • Workshops • Community</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-text-main sm:text-6xl">Build in public. Learn with people. Ship something real.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">Short events, technical labs, and build-focused experiences designed to give you a practical first step into the Deepentra learning loop.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${filter === item ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-950/15' : 'border-border-subtle bg-surface/80 text-text-muted hover:border-indigo-400/40 hover:text-text-main'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="premium-card overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950/40 dark:via-surface dark:to-cyan-950/20">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-7 sm:p-9 lg:p-11">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300"><Sparkles className="h-4 w-4" /> Featured experience</div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted sm:text-base">{featured.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-text-sub">
                <span className="rounded-lg bg-surface px-3 py-2 ring-1 ring-border-subtle"><CalendarDays className="mr-1.5 inline h-3.5 w-3.5" />{featured.date}</span>
                <span className="rounded-lg bg-surface px-3 py-2 ring-1 ring-border-subtle"><Clock3 className="mr-1.5 inline h-3.5 w-3.5" />{featured.time}</span>
                <span className="rounded-lg bg-surface px-3 py-2 ring-1 ring-border-subtle"><MapPin className="mr-1.5 inline h-3.5 w-3.5" />{featured.location}</span>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button to="/workshops" size="lg" icon={ArrowRight}>{featured.cta}</Button>
                <span className="text-sm text-text-sub"><span className="font-bold text-text-main">{featured.price}</span> · {featured.seats}</span>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(99,102,241,.5),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,.35),transparent_30%)]" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7 sm:p-9">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {['IDEA', 'BUILD', 'TEST', 'SHIP'].map((step, index) => <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur"><div className="text-lg font-black text-white">0{index + 1}</div><div className="mt-1 text-[10px] font-bold tracking-[.18em] text-slate-300">{step}</div></div>)}
                </div>
                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">A practical format for meeting builders, testing ideas, and creating your first useful artifact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div><p className="eyebrow">Upcoming</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main">Find your next build.</h2></div>
            <span className="hidden text-sm text-text-sub sm:block">{filtered.length} experiences</span>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <article key={event.id} className="premium-card rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3"><span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-indigo-600 dark:text-indigo-300">{event.type}</span><Ticket className="h-4 w-4 text-text-sub" /></div>
                <h3 className="mt-5 text-xl font-bold text-text-main">{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{event.description}</p>
                <div className="mt-5 space-y-2 text-xs text-text-sub">
                  <div><CalendarDays className="mr-2 inline h-3.5 w-3.5" />{event.date}</div>
                  <div><Clock3 className="mr-2 inline h-3.5 w-3.5" />{event.time}</div>
                  <div><MapPin className="mr-2 inline h-3.5 w-3.5" />{event.location}</div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4"><span className="text-sm font-bold text-text-main">{event.price}</span><Button to="/workshops" variant="ghost" size="sm" icon={ArrowRight}>{event.cta}</Button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-border-subtle bg-surface p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              ['Meet builders', 'Learn alongside students, developers, professionals, and curious first-time builders.'],
              ['Make an artifact', 'Every event should leave you with something concrete: a workflow, prototype, notebook, or project.'],
              ['Find your next step', 'Use the experience to choose a workshop, program, or deeper project challenge that fits you.'],
            ].map(([title, body], index) => <div key={title}><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">0{index + 1}</span><h3 className="mt-4 font-bold text-text-main">{title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{body}</p></div>)}
          </div>
        </section>
      </main>
    </div>
  );
}
