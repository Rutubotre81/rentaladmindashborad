import React, { useState } from 'react';
import './App.css';
import DashboardLayout from './components/DashboardLayout';



const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };
 

 

  return (
    <div>
    
      <DashboardLayout/>
    </div>
  );
};




export default App;
