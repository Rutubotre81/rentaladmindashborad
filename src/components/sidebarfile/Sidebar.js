import React from "react";


const Sidebar=()=>
{
    return(
        <>
        
        <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <i className="fas fa-user-secret me-2"></i>Codersbite
      </div>
      <div className="list-group list-group-flush my-3">
        <a href="dashborad" className="list-group-item list-group-item-action bg-transparent second-text active" >
         <i className="fas fa-tachometer-alt me-2"  ></i>Dashboard
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-project-diagram me-2"></i>Projects
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-chart-line me-2"></i>Tenent
        </a>
       
        <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
          <i className="fas fa-power-off me-2"></i>Logout
        </a>
      </div>
    </div> 

   
        </>
    )
}
export default Sidebar;