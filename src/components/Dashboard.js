import React, { useState } from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMenuOption, setSelectedMenuOption] = useState("Inbox"); // Default Appbar content

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
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        setSelectedMenuOption={setSelectedMenuOption} // Pass the callback
      />

      <div className="flex-1 w-full">
        {/* Appbar */}
        <Appbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          selectedMenuOption={selectedMenuOption} // Pass the selected menu option
        />

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
