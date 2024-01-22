import React from 'react';
import MyLogo from "../images/logo.png"
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";


const NavBar: React.FC = () => {
  return (
    <nav className="w-screen bg-white p-8 flex justify-between">
        <div className="relative">
          <img src={MyLogo} alt="Logo" className="h-40 w-40"/>
        </div>

        <div className="items-center pt-8">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
          Search Recipe for your meals
        </h1>
          
        </div>

        <div className="flex text-primary items-center p-4">
          <div className="text-[35px] pr-4 ">
              <MdOutlineFavorite/>
          </div>
          <div className="text-[35px]">
              <FaBookmark/>
          </div>
        </div>
    
      
    </nav>
  );
};

export default NavBar;
