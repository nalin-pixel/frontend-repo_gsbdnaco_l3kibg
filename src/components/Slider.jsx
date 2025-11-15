import { useState } from 'react'

const slides = [
  {
    title: 'Care Dashboard',
    subtitle: 'See your whole day at once.',
    body: 'A clean, quiet view of today\'s care – queues, delays, priorities, and tasks.'
  },
  {
    title: 'Smart Scheduling',
    subtitle: 'Plan with real signals.',
    body: 'Scheduling that adapts to demand and clinician load.'
  },
  {
    title: 'Patient Flow',
    subtitle: 'Keep care moving.',
    body: 'Real-time view of arrivals, waits, and transitions.'
  },
  {
    title: 'Active Consultations',
    subtitle: 'One uninterrupted space.',
    body: 'Notes, orders, and context—together, calm.'
  },
  {
    title: 'Telecare Suite',
    subtitle: 'In-person or remote—seamless.',
    body: 'Video, chat, and follow-up built into flow.'
  },
  {
    title: 'AI Care Summaries',
    subtitle: 'Clear and audit-ready.',
    body: 'Structured summaries that reduce rework.'
  }
]

export default function Slider() {
  const [i, setI] = useState(0)

  const next = () => setI((i + 1) % slides.length)
  const prev = () => setI((i - 1 + slides.length) % slides.length)

  return (
    <div className="relative rounded-3xl border border-white/10 p-8 bg-white/5 backdrop-blur-xl">
      <div className="flex items-start justify-between gap-10">
        <div className="max-w-xl">
          <div className="text-sm text-white/60">{slides[i].title}</div>
          <h3 className="text-2xl sm:text-3xl text-white font-medium mt-2">{slides[i].subtitle}</h3>
          <p className="text-white/75 mt-3">{slides[i].body}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={prev} className="rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">Prev</button>
            <button onClick={next} className="rounded-full bg-white text-black px-4 py-2 hover:bg-white/90">Next</button>
          </div>
        </div>
        <div className="hidden md:block w-[55%] aspect-[16/10] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl" />
      </div>
      <div className="mt-4 flex gap-1">
        {slides.map((_, idx) => (
          <div key={idx} className={`h-1 rounded-full transition-all ${idx <= i ? 'bg-white/80' : 'bg-white/20'}`} style={{ width: `${100 / slides.length}%` }} />
        ))}
      </div>
    </div>
  )
}
