export function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`relative py-20 sm:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-4 text-white/80 text-lg max-w-3xl">{subtitle}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}
