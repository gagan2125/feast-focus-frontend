import React, { useState } from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
  
    return (
      <div className="flex relative">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" 
            onClick={closeSidebar}
          />
        )}
        
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        <div className="flex-1 w-full">
          {/* Appbar */}
          <Appbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          
          {/* Main Content */}
          <div className="p-4">
            <h1 className="text-lg font-bold">Welcome to the Dashboard!</h1>
            {/* Your main dashboard content goes here */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;