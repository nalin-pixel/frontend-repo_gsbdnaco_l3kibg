import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function ScribeSummaries() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Scribe + Summaries" title="Clinical notes. Clear and safe." subtitle="Human-in-the-loop summaries that save time and protect judgement. Built for UK clinical practice.">
        <ul className="space-y-3 text-white/80">
          <li>Structured notes with smart recall</li>
          <li>Consent-first audio and transcript handling</li>
          <li>Editable draft summaries with provenance</li>
          <li>Clinician approval required—always</li>
        </ul>
      </ContentBlock>
    </PageShell>
  )
}
