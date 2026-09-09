import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BriefcaseBusiness, Code2, Layers3, Sparkles, Wrench, CalendarDays, ShieldCheck, Users, Target, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import ProgramCard from '../components/shared/ProgramCard';
import WorkshopCard from '../components/shared/WorkshopCard';
import { tracksData } from '../data/tracksData';
import { programsData } from '../data/programsData';
import { workshopsData } from '../data/workshopsData';
import { projectsData } from '../data/projectsData';
import { eventsData } from '../data/eventsData';

const trackIcons = [BookOpen, BriefcaseBusiness, Code2];
const ecosystem = ['ChatGPT', 'Gemini', 'Claude', 'OpenAI', 'Groq', 'ElevenLabs', 'Ollama', 'FastAPI'];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="technical-grid hero-glow relative overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        <div className="absolute right-[8%] top-16 hidden h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300"><Sparkles className="h-3.5 w-3.5" /> Learn. Build. Prove.</div>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.045em] text-text-main sm:text-6xl lg:text-7xl lg:leading-[1.02]">Learn AI by <span className="gradient-text">building with it.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">Practical AI learning for students, professionals, and developers who want to understand AI, use it well, and build with it.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/programs" variant="primary" size="lg" icon={ArrowRight}>Explore Programs</Button><Button to="/events" variant="secondary" size="lg">Join a Hackathon</Button></div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-text-sub"><span>✓ Beginner to advanced</span><span>✓ Hands-on projects</span><span>✓ Feedback & evaluation</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg"><div className="premium-card rounded-3xl p-4 backdrop-blur sm:p-5"><div className="flex items-center justify-between border-b border-border-subtle pb-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">Deepentra learning loop</p><p className="mt-1 text-sm font-semibold text-text-main">From knowledge to evidence</p></div><span className="rounded-lg bg-surface-inset px-2 py-1 font-mono text-[10px] text-text-sub">/build</span></div><div className="mt-4 grid gap-2.5">{['Learn the concept','Practice with guidance','Build a real artifact','Get feedback','Prove the capability'].map((step,index)=><div key={step} className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-inset/70 p-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">0{index+1}</span><span className="text-sm font-medium text-text-main">{step}</span></div>)}</div><div className="mt-4 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-3 text-xs text-text-muted"><span className="font-semibold text-text-main">The result:</span> a portfolio of practical work you can explain, demonstrate, and improve.</div></div></div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-surface/70">
        <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-8"><div className="flex flex-wrap items-center gap-2 sm:gap-3"><span className="mr-2 text-[11px] font-bold uppercase tracking-[.16em] text-text-sub">Tools & ecosystem</span>{ecosystem.map((name)=><span key={name} className="rounded-lg border border-border-subtle bg-surface px-3 py-2 text-xs font-semibold text-text-muted shadow-sm">{name}</span>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Target,'Outcome-first learning','Start with what you want to achieve, not a long list of tools.'],
            [Wrench,'Build real artifacts','Projects, workflows, notebooks, prototypes, and technical systems.'],
            [ShieldCheck,'Responsible by design','Verification, human review, privacy, and practical AI safety.'],
            [Users,'Learn with people','Cohorts, labs, workshops, feedback, and builder communities.'],
          ].map(([Icon,title,body])=><div key={title} className="premium-card rounded-2xl p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-bold text-text-main">{title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{body}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-2xl"><p className="eyebrow">Choose your path</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Three tracks. Three clear outcomes.</h2><p className="mt-3 text-sm leading-6 text-text-muted sm:text-base">Start with the one that matches what you want to do with AI.</p></div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">{tracksData.map((track,index)=>{const Icon=trackIcons[index];return <Link key={track.id} to="/programs" className="premium-card group rounded-2xl p-5 sm:p-6"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"><Icon className="h-5 w-5" /></span><ArrowRight className="h-4 w-4 text-text-sub transition-transform group-hover:translate-x-1" /></div><h3 className="mt-5 text-xl font-bold text-text-main">{track.title}</h3><p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">{track.tagline}</p><p className="mt-3 text-sm leading-6 text-text-muted">{track.outcome}</p><div className="mt-5 flex flex-wrap gap-2">{track.features.slice(0,3).map((feature)=><span key={feature} className="rounded-lg bg-surface-inset px-2.5 py-1 text-xs text-text-sub">{feature}</span>)}</div></Link>})}</div>
      </section>

      <section className="border-y border-border-subtle bg-surface/60"><div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><p className="eyebrow">Featured programs</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Programs built around outcomes.</h2><p className="mt-3 text-sm leading-6 text-text-muted sm:text-base">Focused programs that turn learning into practical work.</p></div><Button to="/programs" variant="secondary" size="sm" icon={ArrowRight}>View all programs</Button></div><div className="mt-8 grid gap-5 lg:grid-cols-3">{programsData.slice(0,3).map((program)=><ProgramCard key={program.id} program={program} />)}</div></div></section>

      <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><p className="eyebrow">What can you build?</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Real problems. Real builds.</h2><p className="mt-4 text-sm leading-6 text-text-muted sm:text-base">Explore examples of the problems Deepentra learners can work on—from AI workflows to retrieval systems and developer tools.</p><Button to="/showcase" variant="secondary" size="sm" icon={ArrowRight} className="mt-6">Open showcase</Button></div><div className="grid gap-4 sm:grid-cols-2">{projectsData.slice(0,4).map((project,index)=><Link key={project.id} to="/showcase" className="group rounded-2xl border border-border-subtle bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300"><div className="flex items-center justify-between"><span className="text-[11px] font-bold uppercase tracking-[.13em] text-indigo-600 dark:text-indigo-300">Build 0{index+1}</span><Wrench className="h-4 w-4 text-text-sub" /></div><h3 className="mt-4 text-lg font-bold text-text-main group-hover:text-indigo-600 dark:group-hover:text-indigo-300">{project.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-6 text-text-muted">{project.problem}</p></Link>)}</div></div></section>

      <section className="bg-surface"><div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><p className="eyebrow">Upcoming experiences</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Hackathons, labs & workshops.</h2><p className="mt-3 text-sm leading-6 text-text-muted sm:text-base">Try Deepentra before committing to a longer program.</p></div><Button to="/events" variant="secondary" size="sm" icon={ArrowRight}>See all events</Button></div><div className="mt-8 grid gap-5 md:grid-cols-3">{eventsData.slice(0,3).map((event)=><article key={event.id} className="premium-card rounded-2xl p-5"><span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-indigo-600 dark:text-indigo-300">{event.type}</span><h3 className="mt-5 text-xl font-bold text-text-main">{event.title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{event.description}</p><div className="mt-5 flex items-center gap-2 text-xs font-medium text-text-sub"><CalendarDays className="h-3.5 w-3.5" /> {event.date}</div></article>)}</div></div></section>

      <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"><div className="premium-card rounded-3xl p-7 sm:p-9"><div className="grid gap-8 lg:grid-cols-5">{[['01','Learn','Build the mental model.'],['02','Practice','Work through guided exercises.'],['03','Build','Create something useful.'],['04','Get evaluated','Test, review, improve.'],['05','Prove','Turn the work into evidence.']].map(([num,title,body],i)=><div key={num} className="relative"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">{num}</span><h3 className="mt-4 font-bold text-text-main">{title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{body}</p>{i<4&&<span className="absolute right-0 top-4 hidden text-text-sub lg:block">→</span>}</div>)}</div></div></section>

      <section className="mx-auto max-w-[1280px] px-4 pb-4 sm:px-6 lg:px-8"><div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10"><div className="max-w-2xl"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300"><Layers3 className="h-4 w-4" /> For colleges & organizations</div><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Run practical AI learning for your campus or team.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Bring workshops, focused programs, project-led learning, and a clear learner journey to your organization.</p></div><div className="mt-7 shrink-0 lg:mt-0"><Button to="/institutions" variant="primary" size="lg" icon={ArrowRight}>For Institutions</Button></div></div></section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20"><p className="eyebrow">Start where you are</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Ready to build?</h2><p className="mt-3 text-sm leading-6 text-text-muted sm:text-base">Choose a program, join a workshop, or jump into an event.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button to="/programs" variant="primary" size="lg" icon={ArrowRight}>Explore Programs</Button><Button to="/events" variant="secondary" size="lg">See Events</Button></div></section>
    </div>
  );
}
