import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';

const EditTenant = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newTenant, setNewTenant] = useState({
    TenantCode: '',
    FirstName: '',
    LastName: '',
    EmailID: '',
    MobileNo: '',
    AddressL1: '',
    UserName: '',
    Password: '',
  });

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/tenants/${id}`)
      .then(response => {
        setNewTenant(response.data);
      })
      .catch(error => {
        console.error('Error fetching tenant data:', error);
      });
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/tenants/${id}`, newTenant)
      .then(response => {
        console.log('Tenant updated:', response.data);
        navigate('/tenants'); // Redirect after successful update
      })
      .catch(error => {
        console.error('Error updating tenant:', error);
      });
  };

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };

  return (
    <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header handleToggleSidebar={handleToggleSidebar}/>
          <div className="col">
            <h2>Edit Tenant</h2>
            <form onSubmit={handleFormSubmit}>
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
                  type="password"
                  className="form-control"
                  value={newTenant.Password}
                  onChange={(e) =>
                    setNewTenant({ ...newTenant, Password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTenant;
