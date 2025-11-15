import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function UKPilot() {
  return (
    <PageShell>
      <ContentBlock eyebrow="UK Pilot Programme" title="Launching carefully. Working closely." subtitle="We’re preparing for UK regulatory pathways with a small cohort of clinics. Safety-first. Transparent by design.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-white/80 mb-6">Interested in joining? Share your details and we’ll reach out with next steps.</p>
          <form className="grid gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" placeholder="Clinic name" />
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" placeholder="Contact email" />
            <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" rows="4" placeholder="What problems are you solving first?" />
            <button type="button" className="justify-self-start bg-white text-black rounded-lg px-5 py-3 font-medium hover:bg-white/90 transition">Request pilot invite</button>
          </form>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
