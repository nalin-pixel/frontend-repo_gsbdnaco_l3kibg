import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function CareDashboard() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Care Dashboard" title="Operational clarity in one view" subtitle="Track arrivals, triage, consults, and discharge without tab-hopping. Capacity and risk surface calmly.">
        <ul className="space-y-4 text-white/80">
          <li>Live queue with status and SLA awareness</li>
          <li>Smart prioritisation that remains clinician-led</li>
          <li>Capacity signals and bottleneck detection</li>
          <li>Handovers with audit trails</li>
        </ul>
      </ContentBlock>
    </PageShell>
  )
}
