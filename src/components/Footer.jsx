export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-white/60">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div>© {new Date().getFullYear()} HAAI</div>
        <div className="text-sm">Care Productivity Platform</div>
      </div>
    </footer>
  )
}
