import React from 'react';
import MyLogo from "../images/logo.png"

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex">
        <div className="relative">
          <img src={MyLogo} alt="Logo" className="h-40 w-40"/>
        </div>
       
      </div>
    </nav>
  );
};

export default NavBar;
