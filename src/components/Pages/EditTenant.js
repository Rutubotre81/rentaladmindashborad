import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import './Tenent.css';

const EditTenant = () => {
  const { id } = useParams(); // Get the tenant ID from the route parameters
  const navigate = useNavigate();

  const [tenant, setTenant] = useState({
    TenantCode: '',
    FirstName: '',
    EmailID: '',
    MobileNo: ''
    // Other tenant properties...
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/tenants/${id}`)
      .then(response => {
        setTenant(response.data);
      })
      .catch(error => {
        console.error('Error fetching tenant data:', error);
      });
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTenant(prevTenant => ({
      ...prevTenant,
      [name]: value
    }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // Update tenant data on the server
    axios.put(`http://127.0.0.1:8000/api/tenants/${id}`, tenant)
      .then(response => {
        console.log('Tenant updated:', response.data);
        // Navigate back to the tenant details page
        navigate(`/tenants/${id}`);
      })
      .catch(error => {
        console.error('Error updating tenant:', error);
      });
  };
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this tenant?')) {
      axios.delete(`http://127.0.0.1:8000/api/tenants/${id}`)
        .then(response => {
          console.log('Tenant deleted:', response.data);
          navigate('/tenants');
        })
        .catch(error => {
          console.error('Error deleting tenant:', error);
        });
    }
  };



  return (
    <div className="App">
          <div className="col">
            <h2>Edit Tenant</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="tenantCode">Tenant Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenantCode"
                  name="TenantCode"
                  value={tenant.TenantCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="FirstName"
                  value={tenant.FirstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="EmailID"
                  value={tenant.EmailID}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  name="MobileNo"
                  value={tenant.MobileNo}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        
     
    </div>
  );
};

export default EditTenant;
