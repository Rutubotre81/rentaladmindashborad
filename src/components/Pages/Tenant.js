<<<<<<< HEAD:src/components/Sidebarmenu/Tenent.js
import React from "react";
import './style.css';
=======
import React,{useState} from 'react';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import './Tenent.css';
>>>>>>> c17e5168ad63d79c0e5e734581789a175220940f:src/components/Pages/Tenant.js

const Tenant = () => {

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
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
        <Sidebar/> {/* Pass openDashboard function to Sidebar */}
        <div id="page-content-wrapper">
          <Header/>
          <div className="col">
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
        </div>
      </div>
    </div>
>>>>>>> c17e5168ad63d79c0e5e734581789a175220940f:src/components/Pages/Tenant.js
  );
};



export default Tenant;
