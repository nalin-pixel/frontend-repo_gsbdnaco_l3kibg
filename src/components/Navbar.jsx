import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Care Dashboard', to: '/care-dashboard' },
  { label: 'Scheduling', to: '/scheduling' },
  { label: 'Patient Flow', to: '/patient-flow' },
  { label: 'Consultation Workspace', to: '/consultation-workspace' },
  { label: 'Telecare Suite', to: '/telecare-suite' },
  { label: 'Scribe + Summaries', to: '/scribe-summaries' },
  { label: 'For Clinics', to: '/for-clinics' },
  { label: 'For Doctors', to: '/for-doctors' },
  { label: 'UK Pilot Programme', to: '/uk-pilot' },
  { label: 'About', to: '/about' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold tracking-tight text-lg">
          HAAI
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="lg:hidden text-white/80"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
