import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'For Clinics', to: '/for-clinics' },
  { label: 'For Doctors', to: '/for-doctors' },
  { label: 'UK Pilot', to: '/uk-pilot' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] px-2 py-2 max-w-[900px] w-full sm:w-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
