import React, { useState, useEffect } from 'react';
// NavLink is a speical type of Link object that is called by the ReactRouter
import { NavLink, Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full bg-[#262626] text-white px-6 py-0 flex justify-between items-left">
      
      <div className="flex flex-col">
      <NavLink
        to = "/home"
          className="text-xl font-bold tracking-wide px-8">halcy.dev
        </NavLink>  
        {/* <span className="text-xl font-bold tracking-wide px-8">halcy.dev</span> */}
        <div className="border-b border-gray-400 w-full mt-2" />
      </div>

      <nav className="flex space-x-8">
        <NavLink
          to = "/about"
           className={({ isActive }) => 
            isActive ? "text-lg font-bold text-white px-6 py-1"
                     : "text-sm text-white px-6 py-1 hover:underline"
          }>
          About 
        </NavLink>

        <NavLink
          to = "/projcts"
            className={({ isActive }) => 
              isActive ? "text-lg font-bold text-white px-6 py-1"
                        : "text-sm text-white px-6 py-1 hover:underline"
            }>
            Projects
          </NavLink>

          <NavLink
          to = "/blog"
            className={({ isActive }) => 
              isActive ? "text-lg font-bold text-white px-6 py-1"
                        : "text-sm text-white px-6 py-1 hover:underline"
            }>
            Blog
          </NavLink>
      </nav>
    </header>
  );
};

export default Header;