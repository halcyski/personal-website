import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full bg-[#262626] text-white px-6 py-0 flex justify-between items-left">
      {/* Left Side: Title + Underline */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wide px-8">halcy.dev</span>
        <div className="border-b border-gray-400 w-full mt-2" />
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex space-x-8">
        <a href="#" className="text-white visited:text-white hover:underline px-6 py-1">
          Home
        </a>
        <a href="#" className="text-white visited:text-white hover:underline px-6 py-1">
          Projects
        </a>
        <a href="#" className="text-white visited:text-white hover:underline px-6 py-1">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;