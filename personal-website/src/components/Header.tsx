import React, { useState, useEffect } from 'react';
// NavLink is a speical type of Link object that is called by the ReactRouter
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header: React.FC = () => {
  // tracks hover status 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="sticky top-5 w-full bg-[#262626] text-white px-6 py-0 flex justify-between items-left">
      
  
      <nav className="navbar flex space-x-8">
        <NavLink
          to = "/" 
            className={({ isActive }) =>
              isActive ? "text-x1 font-bold text-white px-6 py-1 transition transform duration-200"
                       : "text-sm text-gray-400 px-6 py-1 hover:scale-115 transition transform duration-200"
          }>
          halcy.dev
        </NavLink>

        <NavLink
          to = "/about"
           className={({ isActive }) => 
            isActive ? "text-x1 font-bold text-white px-6 py-1 transition transform duration-200"
                     : "text-sm text-gray-400 px-6 py-1 hover:scale-115 transition transform duration-200"
          }>
          About 
        </NavLink>

        <NavLink
          to = "/projcts"
            className={({ isActive }) => 
              isActive ? "text-x1 font-bold text-white px-6 py-1 transition transform duration-200"
                        : "text-sm text-gray-400 px-6 py-1 hover:scale-115 transition transform duration-200"
            }>
            Projects
          </NavLink>

          <NavLink
          to = "/blog"
            className={({ isActive }) => 
              isActive ? "text-x1 font-bold text-white px-6 py-1 transition transform duration-200"
                        : "text-sm text-gray-400 px-6 py-1 hover:scale-115 transition transform duration-200"
            }>
            Blog
          </NavLink>
      </nav>
    </header>
  );
};

export default Header;