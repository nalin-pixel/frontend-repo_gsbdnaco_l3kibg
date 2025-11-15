import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function About() {
  return (
    <PageShell>
      <ContentBlock eyebrow="About" title="Why HAAI" subtitle="Care slows down when systems fight the work. We’re building the layer that restores momentum.">
        <p className="text-white/80">We believe in human-first clinical software. Premium craft, clear outcomes, safety by design.</p>
      </ContentBlock>
    </PageShell>
  )
}
