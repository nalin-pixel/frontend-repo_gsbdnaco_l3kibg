export function ContentBlock({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">{eyebrow}</p>
        )}
        {title && (
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-6">{title}</h1>
        )}
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-3xl">{subtitle}</p>
        )}
        <div className="grid gap-6 text-white/90">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 left-10 w-72 h-72 bg-violet-400/10 blur-3xl rounded-full" />
      </div>
    </section>
  )
}
