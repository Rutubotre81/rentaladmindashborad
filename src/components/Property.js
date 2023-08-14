import React, { useState } from 'react';
import Sidebar from './sidebarfile/Sidebar';
import Header from './headerfile/Header';

import Property from './Sidebarmenu/Property';

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
           <Property/>
           {/* <Profile/> */}
        </div>
      </div>
    </div>
  );
};




export default Tenant;
