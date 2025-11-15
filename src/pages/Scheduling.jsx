import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function Scheduling() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Scheduling" title="Bookings without the bounce" subtitle="Clear, context-rich scheduling that respects clinic reality and patient time.">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2">Smart templates</h3>
            <p className="text-white/70">Standard slots with flexibility where it matters.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2">Real-time context</h3>
            <p className="text-white/70">Patient context and clinician load in one view.</p>
          </div>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
