import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import './Tenent.css';
import { useNavigate  } from "react-router-dom";

const Tenant = () => {
    const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  
    const [newTenant, setNewTenant] = useState({
        TenantCode: '',
        FirstName: '',
        LastName:'',
        EmailID: '',
        MobileNo: '',
        AddressL1:'',
        UserName:'',
        Password:'',
      });
    
      const navigate = useNavigate();
    
      const handleAddTenant = () => {
        // Implement logic to add the new tenant using the API
        axios
          .post('http://127.0.0.1:8000/api/tenants', newTenant)
          .then(response => {
            console.log('Tenant added:', response.data);
            navigate('/tenants'); // Navigate back to the tenant list
          })
          .catch(error => {
            console.error('Error adding tenant:', error);
          });
      };

  return (
    <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header />
          <div className="col">
          <h2>Add Tenant</h2>
      <form>
         <div className="form-group">
                <label>Tenant Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.TenantCode}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, TenantCode: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.FirstName}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, FirstName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.LastName}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, LastName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newTenant.EmailID}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, EmailID: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Mobile no</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.MobileNo}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, MobileNo: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.AddressL1}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, AddressL1: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>UserName</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.UserName}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, UserName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTenant.Password}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, Password: e.target.value })
                  }
                />
              </div>
        <button type="button" className="btn btn-primary" onClick={handleAddTenant}>
          Add Tenant
        </button>
      </form>
         

          


          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenant;
