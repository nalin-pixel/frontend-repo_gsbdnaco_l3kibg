import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function ConsultationWorkspace() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Consultation Workspace" title="Protect attention. Accelerate clarity." subtitle="Designed for the consult: notes, orders, coding, and decisions in one uninterrupted space.">
        <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
          <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">One-screen context without clutter</li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Shortcuts for common orders and follow-ups</li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Safe summaries with human review</li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Audit-ready changes with timestamps</li>
        </ul>
      </ContentBlock>
    </PageShell>
  )
}
