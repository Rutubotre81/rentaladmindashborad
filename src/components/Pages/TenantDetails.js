import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TenantDetails = () => {
  const { id } = useParams();
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/tenants/${id}`)
      .then(response => {
        console.log(response.data);
        setTenant(response.data);
      })
      .catch(error => {
        console.error('Error fetching tenant data:', error);
      });
  }, [id]);

  if (!tenant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>View Tenant Details</h2>
      <p>Tenant ID: {tenant.id}</p>
      <p>Tenant Code: {tenant.TenantCode}</p>
      <p>Name: {tenant.FirstName}</p>
      <p>Email: {tenant.EmailID}</p>
      <p>Mobile No: {tenant.MobileNo}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TenantDetails;
