import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';


import { Link, Outlet, useNavigate  } from "react-router-dom";

const Tenant = () => {

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [tenants, setTenants] = useState([]);
  
  const navigate = useNavigate();


  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };
 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tenants')
      .then(response => {
        setTenants(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (tenantId) => {
    if (window.confirm('Are you sure you want to delete this tenant?')) {
      axios.delete(`http://127.0.0.1:8000/api/tenants/${tenantId}`)
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
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header  handleToggleSidebar={handleToggleSidebar}/>
          <div className="col">
          
          


            {!window.location.pathname.includes('/tenants/') ? ( // Check if "id" is in the route
              <table className="table bg-white rounded shadow-sm table-hover">
                <thead>
                <tr>
                <th colSpan="6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="property-heading">Tenants</h2>
                    <Link to="/tenants/add" className="btn btn-primary mb-3">
                    <i className="fas fa-plus"></i>
                    </Link>
                  </div>
                </th>
              </tr>
                  <tr>
                    <th scope="col" width="50">#</th>
                    <th scope="col">Tenant Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile no</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map(tenant => (
                    <tr key={tenant.id}>
                      {/* Display tenant information */}
                      <th scope="row">{tenant.id}</th>
                      <td>{tenant.TenantCode}</td>
                      <td>{tenant.FirstName}</td>
                      <td>{tenant.EmailID}</td>
                      <td>{tenant.MobileNo}</td>
                      <td>
                        <span className="btn btn-link text-primary">
                        <Link to={`/tenants/${tenant.id}`}>
                            <i className="fas fa-eye"></i>
                          </Link>

                        </span>
                        <span className="btn btn-link text-warning">
                        <Link to={`/tenants/${tenant.id}/edit`}>
                          <i className="fas fa-edit"></i>
                          </Link>
                        </span>
                        <span className="btn btn-link text-danger">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(tenant.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>


                         
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Outlet /> // Show outlet when "id" is in the route
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenant;