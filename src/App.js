import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebarfile/Sidebar';
import Header from './components/headerfile/Header';
import Middle from './components/middlepart/Middle';
// import Profile from './components/dropdownmenu/Profile';
// import Settings from './components/dropdownmenu/Settings';
import Tenent from './components/Sidebarmenu/Tenent';
import DashboardLayout from './components/DashboardLayout';

const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

 

  return (
    <div>
      <DashboardLayout/>
    </div>
  );
};




export default App;
