import React from 'react';
import MyLogo from "../images/logo.png"
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="w-screen bg-white p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 sm:mb-0">
        <img
          src={MyLogo}
          alt="Logo"
          className="h-16 w-16 sm:h-35 sm:w-35"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className="text-center sm:text-center sm:ml-4">
        <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
          Search Recipe for your meals
        </h1>
      </div>

      <div className="flex text-primary items-center mt-4 sm:mt-0">
        <div className="text-[25px] pr-2 sm:pr-4">
          <MdOutlineFavorite />
        </div>
        <div className="text-[25px]">
          <FaBookmark />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
