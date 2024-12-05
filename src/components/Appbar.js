import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { LuPanelLeft } from "react-icons/lu";

const Appbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="bg-white shadow-md w-full h-16 flex items-center px-4 justify-between">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`text-gray-500 hover:text-gray-800 lg:hidden`}
      >
        <LuPanelLeft size={24} />
      </button>
      {/* Search bar */}
      <div className="flex items-center flex-grow mx-4">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none text-gray-700"
        />
      </div>
      {/* Notification and User Avatar */}
      <div className="flex items-center space-x-4">
        <FiBell className="text-gray-500 cursor-pointer" />
        <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center">
          FF
        </div>
      </div>
    </div>
  );
};
export default Appbar;
