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
import { TbEdit, TbListDetails, TbSettings } from "react-icons/tb";
import { BiTask, BiImport } from "react-icons/bi";

const Sidebar = ({ isOpen, onClose, setSelectedMenuOption }) => {
  const [openMenu, setOpenMenu] = useState({});
  const [activeOption, setActiveOption] = useState(null); // Track active option

  // Memoize menuItems to prevent unnecessary re-renders
  const menuItems = useMemo(
    () => [
      { name: "Inbox", icon: <FiInbox /> },
      { name: "My Issues", icon: <FiLayers /> },
      {
        name: "Workspace",
        icon: <FiLayers />,
        subItems: [
          { name: "Issues", icon: <BiTask /> },
          { name: "Projects", icon: <TbListDetails /> },
          { name: "Views", icon: <TbSettings /> },
        ],
      },
      {
        name: "Your Teams",
        icon: <FiUsers />,
        subItems: [
          { name: "Team A", icon: <FiUsers /> },
          { name: "Team B", icon: <FiUsers /> },
        ],
      },
      {
        name: "Try",
        icon: <FiClock />,
        subItems: [
          { name: "Import Issues", icon: <BiImport /> },
          { name: "Invite People", icon: <TbEdit /> },
          { name: "Cycles", icon: <FiClock /> },
        ],
      },
    ],
    []
  );

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  useEffect(() => {
    // Initialize all submenus to be closed
    const initialOpenState = menuItems.reduce((obj, item) => {
      if (item.subItems) {
        obj[item.name] = false; // All submenus are initially closed
      }
      return obj;
    }, {});
    setOpenMenu(initialOpenState);
  }, [menuItems]);

  const handleOptionClick = (name) => {
    setActiveOption(name); // Set active option
    setSelectedMenuOption(name); // Pass to parent
    onClose(); // Optionally close sidebar
  };

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
        <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center">
          FF
        </div>
          <h1 className="text-lg font-bold text-purple-700">Feast Focus</h1>
          <div className="flex items-center space-x-3">
            <FiSearch className="text-gray-500 hover:text-gray-800 cursor-pointer" size={20} />
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
                    className={`flex items-center cursor-pointer py-1 px-1 text-gray-800 hover:text-purple-700 ${
                      activeOption === item.name ? "bg-purple-100 text-purple-700" : ""
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </span>
                    <span className="ml-2">
                      {openMenu[item.name] ? <FiChevronDown /> : <FiChevronRight />}
                    </span>
                  </div>
                  <ul
                    className={`mt-2 transition-all duration-300 overflow-hidden 
                      ${openMenu[item.name] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`flex items-center text-gray-800 text-sm cursor-pointer py-1 pl-8 hover:text-purple-700 ${
                          activeOption === subItem.name ? "bg-purple-100 text-purple-700" : ""
                        }`}
                        onClick={() => handleOptionClick(subItem.name)}
                      >
                        <span className="mr-2">{subItem.icon}</span>
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  className={`flex items-center space-x-2 text-gray-800 text-sm py-2 px-2 hover:text-purple-700 cursor-pointer ${
                    activeOption === item.name ? "bg-purple-100 text-purple-700" : ""
                  }`}
                  onClick={() => handleOptionClick(item.name)}
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
