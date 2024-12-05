import React, { useState, useMemo, useEffect } from "react";
import {
  FiInbox,
  FiLayers,
  FiChevronDown,
  FiChevronRight,
  FiUsers,
  FiClock,
  FiSearch,
} from "react-icons/fi";
import { TbEdit } from "react-icons/tb";

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState({});

  // Memoize menuItems to prevent unnecessary re-renders
  const menuItems = useMemo(() => [
    { name: "Inbox", icon: <FiInbox /> },
    { name: "My Issues", icon: <FiLayers /> },
    {
      name: "Workspace",
      icon: <FiLayers />,
      subItems: ["Issues", "Projects", "Views"],
    },
    {
      name: "Your Teams",
      icon: <FiUsers />,
      subItems: ["Team A", "Team B"],
    },
    {
      name: "Try",
      icon: <FiClock />,
      subItems: ["Import Issues", "Invite People", "Cycles"],
    },
  ], []);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  useEffect(() => {
    // Set the initial state of the sidebar to be open on larger screens
    const initialOpenState = menuItems.reduce((obj, item) => {
      if (item.subItems) {
        obj[item.name] = window.innerWidth >= 1024;
      }
      return obj;
    }, {});
    
    setOpenMenu(initialOpenState);
  }, [menuItems]);

  return (
    <div
      className={`bg-gray-100 border-r h-screen fixed lg:relative z-20 transition-all duration-300 
        ${isOpen ? "w-64" : "w-0 lg:w-64"} 
        ${isOpen ? "left-0" : "-left-64 lg:left-0"} 
        overflow-y-auto overflow-x-hidden`}
    >
      <button 
        onClick={onClose} 
        className="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        ✕
      </button>
      <div className="p-4">
        {/* Logo and Icons */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-bold text-purple-700">Feast Focus</h1>
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <FiSearch className="text-gray-500 hover:text-gray-800 cursor-pointer" size={20} />
            {/* Edit Icon */}
            <TbEdit className="text-gray-500 hover:text-gray-800 cursor-pointer" size={20} />
          </div>
        </div>
        {/* Menu */}
        <nav>
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              {/* Dropdown Menu */}
              {item.subItems ? (
                <div>
                  <div
                    onClick={() => toggleMenu(item.name)}
                    className="flex justify-between items-center cursor-pointer py-2 px-2 text-gray-800 hover:text-purple-700"
                  >
                    <span className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    {openMenu[item.name] ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    )}
                  </div>
                  <ul
                    className={`ml-4 mt-2 transition-all duration-300 overflow-hidden 
                      ${openMenu[item.name] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-gray-800 text-sm cursor-pointer py-1 hover:text-purple-700"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  className="flex items-center space-x-2 text-gray-800 text-sm py-2 px-2 hover:text-purple-700 cursor-pointer"
                  key={index}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
