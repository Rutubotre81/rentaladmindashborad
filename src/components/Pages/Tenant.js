<<<<<<< HEAD
<<<<<<< HEAD:src/components/Sidebarmenu/Tenent.js
import React from "react";
import './style.css';
=======
import React,{useState} from 'react';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import './Tenent.css';
>>>>>>> c17e5168ad63d79c0e5e734581789a175220940f:src/components/Pages/Tenant.js
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import './Tenent.css';
import { Link, Outlet, useNavigate  } from "react-router-dom";
>>>>>>> cb80b430f43034a8dea424c7f1d876d14afcde86

const Tenant = () => {

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [tenants, setTenants] = useState([]);
  
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
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
<<<<<<< HEAD:src/components/Sidebarmenu/Tenent.js
    <>
    <div className="row my-5">
          <h3 className="fs-4 mb-3"></h3>
      <div className="col">
     
=======
    <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header />
          <div className="col">
<<<<<<< HEAD
      <h2>Tenent List</h2>
>>>>>>> c17e5168ad63d79c0e5e734581789a175220940f:src/components/Pages/Tenant.js
        <table className="table bg-white rounded shadow-sm table-hover">
        <thead>
            <tr>
              <th colSpan="6">
                <div className="heading-wrapper">
                  <h2 className="tenent-heading">Tenent</h2>
                  <button className="btn btn-success add-button">
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" width="50">#</th>
              <th scope="col">Tenent Code</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile no</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
              <td>Jonny</td>
              <td>botre@gmail.com</td>
              <td>911275654435</td>
              <td>
              <span className="btn btn-link text-primary">
                  <i className="fas fa-eye"></i>
                </span>
                <span className="btn btn-link text-warning">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="btn btn-link text-danger">
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>46</td>
              <td>Jane</td>
              <td>jane@example.com</td>
              <td>911234567890</td>
              <td>
              <span className="btn btn-link text-primary">
                  <i className="fas fa-eye"></i>
                </span>
                <span className="btn btn-link text-warning">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="btn btn-link text-danger">
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
            {/* Add more rows with data here */}
          </tbody>
        </table>
      </div>
<<<<<<< HEAD:src/components/Sidebarmenu/Tenent.js
      </div>
    </>
=======
=======
            <h2>Tenants </h2>
          <Link to="/tenants/add"
              className="btn btn-primary mb-3"
             
            >
              <i className="fas fa-plus"></i>
            </Link>

          


            {!window.location.pathname.includes('/tenants/') ? ( // Check if "id" is in the route
              <table className="table bg-white rounded shadow-sm table-hover">
                <thead>
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
>>>>>>> cb80b430f43034a8dea424c7f1d876d14afcde86
        </div>
      </div>
    </div>
>>>>>>> c17e5168ad63d79c0e5e734581789a175220940f:src/components/Pages/Tenant.js
  );
};

export default Tenant;
