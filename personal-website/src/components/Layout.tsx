import React from "react";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
  }
  // The children 'prop' represents an element that fits between another
  // element's opening and closing tags 


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;