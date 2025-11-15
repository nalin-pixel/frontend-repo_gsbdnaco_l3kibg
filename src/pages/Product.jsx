import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function Product() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Product" title="One layer. Total clarity." subtitle="HAAI is the care productivity platform that restores flow. Every workflow clicks into place—without forcing clinicians into someone else’s system.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Care Dashboard</h3>
            <p className="text-white/70">Live patient movement, triage state, and clinic capacity at a glance. Built for calm decision-making.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
            <p className="text-white/70">Frictionless bookings with real-time context. Designed for speed and fewer back-and-forths.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Consultation Workspace</h3>
            <p className="text-white/70">A focused environment for the consult. Notes, orders, and follow-ups—without breaking flow.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Telecare Suite</h3>
            <p className="text-white/70">Secure messaging, calls, and remote follow-up. Built to feel natural in hybrid care.</p>
          </div>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
