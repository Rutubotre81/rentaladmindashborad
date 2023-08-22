import React, { useState } from 'react';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';
import Middle from '../middlepart/Middle';




const Home = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };

 

  return (
    <div className="App">
     
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar/> {/* Pass openDashboard function to Sidebar */}
        <div className="main-content" id="page-content-wrapper">
          <Header  handleToggleSidebar={handleToggleSidebar}/>
           <Middle />
        </div>
      </div>
    </div>
  );
};




export default Home;
