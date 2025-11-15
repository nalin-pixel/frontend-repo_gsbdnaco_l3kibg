import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-[#0B0E11] via-[#0A0D10] to-[#0B0E11] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Where Care Moves Faster
          </h1>
          <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl">
            The care productivity tool that brings clarity, flow, and intelligent assistance to every moment of care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/uk-pilot"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
            >
              Join the UK Pilot
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              View the Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
