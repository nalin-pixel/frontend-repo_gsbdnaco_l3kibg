import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07090B] via-[#0A0D10] to-[#0B0E11] text-white">
      <Navbar />
      <main className="pb-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}
