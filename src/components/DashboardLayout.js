import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tenant from './Pages/Tenant';
import Property from './Pages/Property';
import TenantDetails from './Pages/TenantDetails'; 
import EditTenant from './Pages/EditTenant'; 
import AddTenant from './Pages/AddTenant'; 


const DashboardLayout = () => {
  return (
    <div>
  
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/tenant" element={<Tenant />} />
        {/* <Route path="/tenants/:id" component={ViewSingleTenant} />  */}
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> */}
        <Route path="/tenants/add" element={<AddTenant />} />
        <Route path="/tenants" element={<Tenant />}>
        <Route path=":id" element={<TenantDetails />} />
        <Route path=":id/edit" element={<EditTenant />} />
    </Route>
      </Routes>
      

    </Router>
      
    </div>
  )
}

export default DashboardLayout
