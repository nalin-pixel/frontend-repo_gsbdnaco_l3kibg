import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function ForDoctors() {
  return (
    <PageShell>
      <ContentBlock eyebrow="For Doctors" title="A calmer way to practice" subtitle="Everything important in one view. Less friction. More focus.">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Focused consult workspace</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">One-tap orders and smart defaults</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">Recall, coding, and safe summaries</div>
        </div>
      </ContentBlock>
    </PageShell>
  )
}
