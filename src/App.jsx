import React from 'react'
import Homepage from './Pages/Homepage'
import Servicepage from './Pages/Servicepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

    <Routes>

        <Route path="/" element={<Homepage />} />
        {/* <Route path="/terms-of-use" element={<TermsOfUse />} /> */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="/services" element={<Servicepage />} />
        {/* <Route path="/services/:id" element={<ServicePage />} /> */}

    </Routes>

  </BrowserRouter>
  )
}

export default App