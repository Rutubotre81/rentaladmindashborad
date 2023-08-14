import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebarfile/Sidebar';
import Header from './components/headerfile/Header';
import Middle from './components/middlepart/Middle';
// import Profile from './components/dropdownmenu/Profile';
// import Settings from './components/dropdownmenu/Settings';
import Tenent from './components/Sidebarmenu/Tenent';

const App = () => {
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
           <Middle />
           <Tenent/>
           {/* <Profile/> */}
        </div>
      </div>
    </div>
  );
};




export default App;
