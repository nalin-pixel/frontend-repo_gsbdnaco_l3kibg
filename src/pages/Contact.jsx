import PageShell from './PageShell'
import { ContentBlock } from './ContentBlock'

export default function Contact() {
  return (
    <PageShell>
      <ContentBlock eyebrow="Contact" title="Start the conversation" subtitle="Tell us about your clinic. We’ll keep it simple and get back quickly.">
        <form className="grid gap-4 max-w-xl">
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" placeholder="Your name" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" placeholder="Email" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" placeholder="Clinic / Organisation" />
          <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder:text-white/50" rows="4" placeholder="How can we help?" />
          <button type="button" className="justify-self-start bg-white text-black rounded-lg px-5 py-3 font-medium hover:bg-white/90 transition">Send</button>
        </form>
      </ContentBlock>
    </PageShell>
  )
}
