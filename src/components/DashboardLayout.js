import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tenant from './Pages/Tenant';
import Property from './Pages/Property';


const DashboardLayout = () => {
  return (
    <div>
  
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/tenant" element={<Tenant />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> */}
      </Routes>
    </Router>
      
    </div>
  )
}

export default DashboardLayout
