import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';


import { Link, Outlet, useNavigate } from 'react-router-dom';

const Property = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      axios.delete(`http://127.0.0.1:8000/api/properties/${propertyId}`)
        .then(response => {
          console.log('Property deleted:', response.data);
          navigate('/properties');
        })
        .catch(error => {
          console.error('Error deleting property:', error);
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
            {/* Display property list */}


            {!window.location.pathname.includes('/properties/') ? ( 
            <table className="table bg-white rounded shadow-sm table-hover">
              <thead>
              <tr>
                <th colSpan="6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="property-heading">Property</h2>
                    <Link to="/properties/add" className="btn btn-primary mb-3">
                    <i className="fas fa-plus"></i>
                    </Link>
                  </div>
                </th>
              </tr>
                <tr>
                  <th scope="col" width="50">#</th>
                  <th scope="col">Property Code</th>
                  <th scope="col">Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map(property => (
                  <tr key={property.id}>
                    <th scope="row">{property.id}</th>
                    <td>{property.PropertyCode}</td>
                    <td>{property.Type}</td>
                 
                    <td>
                      <span className="btn btn-link text-primary">
                        <Link to={`/properties/${property.id}`}>
                          <i className="fas fa-eye"></i>
                        </Link>
                      </span>
                      <span className="btn btn-link text-warning">
                        <Link to={`/properties/${property.id}/edit`}>
                          <i className="fas fa-edit"></i>
                        </Link>
                      </span>
                      <span className="btn btn-link text-danger">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(property.id)}
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

export default Property;
