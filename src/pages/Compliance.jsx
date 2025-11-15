import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function Compliance() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Compliance & Safety" title="Built for UK clinical standards" subtitle="Privacy, security, and auditability are foundational. We design for human oversight and clear provenance.">
        <ul className="space-y-2 text-white/80">
          <li>Data residency and encryption at rest/in transit</li>
          <li>Role-based permissions and audit trails</li>
          <li>Clinical risk management and incident reporting</li>
          <li>Human-in-the-loop for any AI-assisted feature</li>
        </ul>
      </ContentBlock>
    </PageShell>
  )
}
