import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section } from './components/Section'
import ThreeColumns from './components/ThreeColumns'
import Slider from './components/Slider'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07090B] via-[#0A0D10] to-[#0B0E11]">
      <Navbar />
      <main className="pb-28">
        <Hero />

        <Section
          title="Care should feel fluid. Not fragmented."
          subtitle="HAAI puts your entire clinic into one smooth, intelligent rhythm — from scheduling to consultation to follow-up."
          className="relative"
        />

        <Section title="How HAAI Works">
          <ThreeColumns />
        </Section>

        <Section title="Everything care needs. Finally in one place.">
          <Slider />
        </Section>

        <Section title="The Care Productivity Advantage" className="text-white">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-2xl leading-relaxed">
            <li>Faster patient movement</li>
            <li>Reduced decision friction</li>
            <li>Clearer clinician focus</li>
            <li>Smoother hybrid care</li>
            <li>Better handovers</li>
            <li>Measurably improved clinic flow</li>
          </ul>
        </Section>

        <Section title="For Doctors" subtitle="A workspace that protects your attention. Every tool you need in one uninterrupted flow." />

        <Section title="For Clinics" subtitle="Finally, a system that moves as fast as your clinic. Queue management, scheduling, triage, and telecare—coordinated." />

        <Section title="UK Pilot Programme" subtitle="We’re launching carefully. Safely. Transparently. Join our early cohort as we prepare for UK regulatory compliance." />

        <Section title="Compliance & Safety" subtitle="Data residency · Encryption · UK safety standards · Audit trails · Human-in-the-loop AI" />
      </main>
      <Footer />
    </div>
  )
}

export default App
