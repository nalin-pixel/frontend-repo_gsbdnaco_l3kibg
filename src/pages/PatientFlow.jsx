import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function PatientFlow() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Patient Flow" title="From first contact to follow-up" subtitle="A clear path for each patient. The system adapts to real life, not the other way round.">
        <ol className="list-decimal list-inside text-white/80 space-y-2">
          <li>Intake with essential data only</li>
          <li>Triage with context, not guesswork</li>
          <li>Consultation with focus and recall</li>
          <li>Follow-up and telecare that closes the loop</li>
        </ol>
      </ContentBlock>
    </PageShell>
  )
}
