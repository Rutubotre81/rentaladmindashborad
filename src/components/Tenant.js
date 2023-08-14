import React, { useState } from 'react';
import Sidebar from './sidebarfile/Sidebar';
import Header from './headerfile/Header';
import Tenent from './Sidebarmenu/Tenent';

const Tenant = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

 

  return (
    <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar/> {/* Pass openDashboard function to Sidebar */}
        <div id="page-content-wrapper">
            <Header/>
           <Tenent/>
           {/* <Profile/> */}
        </div>
      </div>
    </div>
  );
};




export default Tenant;
