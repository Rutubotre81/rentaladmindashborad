import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tenant from './Pages/Tenant';
import Property from './Pages/Property';
import TenantDetails from './Pages/TenantDetails';
import EditTenant from './Pages/EditTenant';
import AddTenant from './Pages/AddTenant';
import EditProperty from './Pages/EditProperty';
import PropertyDetails from './Pages/PropertyDetails';
import AddProperty from './Pages/AddProperty';
import EditOwner from './Pages/EditOwner';

const DashboardLayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="properties/add" element={<AddProperty />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/properties/:id/edit" element={<EditProperty />} />
          <Route path="/tenant" element={<Tenant />}/>  
          <Route path="tenants/add" element={<AddTenant />} />
          <Route path="/profile" element={<EditOwner />}/>
        
         {/* <Route path=":id/edit" element={<EditTenant />} />
         <Route path=":id" element={<TenantDetails/>}/> */}
            <Route path="/tenants/:id" element={<TenantDetails />} />
        <Route path="/tenants/:id/edit" element={<EditTenant />} />
    
          <Route path="/tenant" element={<Tenant />}>
       
      
      
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardLayout;
