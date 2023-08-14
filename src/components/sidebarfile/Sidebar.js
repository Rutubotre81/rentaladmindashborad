import React from "react";
import {Link} from "react-router-dom";


const Sidebar=()=>
{
    return(
        <>
        
        <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <i className="fas fa-user-secret me-2"></i>Rental-Manager
      </div>
      <div className="list-group list-group-flush my-3">
      

          <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text active" >
         <i className="fas fa-tachometer-alt me-2"  ></i>Dashboard
         </Link>
         <Link to="/property" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-project-diagram me-2"></i>Property
          </Link>
          <Link to="/tenant" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-chart-line me-2"></i>Tenant
          </Link>
          <Link to="/logout" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
          <i className="fas fa-power-off me-2"></i>Logout
        </Link>
     </div>
    </div> 

   
        </>
    )
}
export default Sidebar;