import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function TelecareSuite() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Telecare Suite" title="Remote care that feels natural" subtitle="Messaging, calls, and follow-ups that belong inside the same flow—secure by default.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-white/80">No chat bubbles, no gimmicks—just clear communication tools with patient context and permissions baked in.</p>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
