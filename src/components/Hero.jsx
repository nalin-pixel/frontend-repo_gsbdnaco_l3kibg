import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

// Lazy-load Spline so we don't block first paint on mobile/low-power
let Spline
try {
  // Optional import to avoid build error if package missing in certain envs
  // Will only be used when conditions allow
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Spline = require('@splinetool/react-spline').default
} catch (_) {
  Spline = null
}

function useWantsHeavyGraphics() {
  const prefersReduced = useReducedMotion()
  const [ok, setOk] = useState(true)

  useEffect(() => {
    // Basic heuristics: disable heavy canvas if reduced motion, low data, or mobile width
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const saveData = conn && (conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g')
    const isSmall = window.matchMedia('(max-width: 1024px)').matches
    setOk(!prefersReduced && !saveData && !isSmall)
  }, [useReducedMotion])

  return ok
}

export default function Hero() {
  const wantsHeavy = useWantsHeavyGraphics()
  const [splineReady, setSplineReady] = useState(false)

  const gradientId = useMemo(() => `grad-${Math.random().toString(36).slice(2)}`,[ ])

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#0A0D10] text-white">
      {/* Ambient gradient field */}
      <div className="absolute inset-0 -z-10">
        <svg aria-hidden="true" className="absolute -top-40 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2" viewBox="0 0 1200 1200">
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.06" />
            </radialGradient>
          </defs>
          <rect width="1200" height="1200" fill={`url(#${gradientId})`} />
        </svg>
        {/* Soft noise overlay for premium texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Motion orbs (lightweight, GPU-friendly) */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-cyan-500/20"
        animate={{ x: [0, 30, -10, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 -right-24 h-96 w-96 rounded-full blur-3xl bg-violet-500/20"
        animate={{ x: [0, -20, 10, 0], y: [0, -10, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Optional Spline scene for high-power devices only */}
      {Spline && wantsHeavy && (
        <div className="absolute inset-0 will-change-transform">
          <div className={`transition-opacity duration-700 ${splineReady ? 'opacity-60' : 'opacity-0'}`}>
            <Spline
              scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
              onLoad={() => setSplineReady(true)}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Where Care Moves Faster
          </motion.h1>
          <motion.p
            className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            The care productivity tool that brings clarity, flow, and intelligent assistance to every moment of care.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
