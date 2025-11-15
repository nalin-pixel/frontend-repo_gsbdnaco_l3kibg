import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function ForClinics() {
  return (
    <PageShell>
      <ContentBlock eyebrow="For Clinics" title="Operational momentum for the whole clinic" subtitle="From reception to discharge, HAAI helps teams move with clarity and care.">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Queue management that respects urgency and fairness</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Scheduling that flexes with reality</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Live insights without dashboards sprawl</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Compliance built in, not bolted on</div>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
