import React, { useState, useEffect, useRef } from "react";
import { FiBell } from "react-icons/fi";
import { LuPanelLeft } from "react-icons/lu";

const Appbar = ({ toggleSidebar, selectedMenuOption }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track dropdown container

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const notifications = [
    "New comment on your issue",
    "Project deadline approaching",
    "Team meeting scheduled at 3 PM",
    "Cycle 1 has been completed",
    "New member joined Team A",
  ];

  return (
    <div className="bg-white shadow-md w-full h-16 flex items-center px-4 justify-between">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`text-gray-500 hover:text-gray-800 lg:hidden`}
      >
        <LuPanelLeft size={24} />
      </button>

      {/* Display Selected Menu Option */}
      <div className="flex items-center flex-grow mx-4 text-lg font-medium text-gray-700">
        {selectedMenuOption}
      </div>

      {/* Notification and User Avatar */}
      <div className="relative flex items-center space-x-4">
        {/* Bell Icon */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <FiBell size={24} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50">
              <div className="py-2">
                <h3 className="px-4 py-2 text-sm font-medium text-gray-600 border-b">
                  Notifications
                </h3>
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {notification}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No new notifications
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
