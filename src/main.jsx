import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import {
  Product,
  CareDashboard,
  Scheduling,
  PatientFlow,
  ConsultationWorkspace,
  TelecareSuite,
  ScribeSummaries,
  ForClinics,
  ForDoctors,
  UKPilot,
  About,
  Compliance,
  Contact,
} from './pages'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#07090B] via-[#0A0D10] to-[#0B0E11] text-white">
      <div className="text-center px-6">
        <p className="text-white/50 mb-2">404</p>
        <h1 className="text-3xl font-semibold mb-3">Page not found</h1>
        <a href="/" className="text-white/80 underline">Back to home</a>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/care-dashboard" element={<CareDashboard />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/patient-flow" element={<PatientFlow />} />
        <Route path="/consultation-workspace" element={<ConsultationWorkspace />} />
        <Route path="/telecare-suite" element={<TelecareSuite />} />
        <Route path="/scribe-summaries" element={<ScribeSummaries />} />
        <Route path="/for-clinics" element={<ForClinics />} />
        <Route path="/for-doctors" element={<ForDoctors />} />
        <Route path="/uk-pilot" element={<UKPilot />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
