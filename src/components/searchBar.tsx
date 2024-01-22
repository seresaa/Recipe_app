import React, { ChangeEvent } from 'react';
import { FaSearch } from "react-icons/fa";
interface SearchBarProps {
  placeholder: string;

}

const SearchBar = ({ placeholder }: SearchBarProps) => {


  return (
    <div className="relative flex-grow">
    <input
      type="text"
      placeholder={placeholder}
      className="sm:min-w-[200px] sm:max-w-[700px] w-full md:w-1/3 pl-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-primary bg-[#F4F4F4]"
    />
    <div className="absolute right-0.5 bottom-0 top-0 bg-primary p-2 pb-3 rounded-lg">
      <FaSearch className="h-5 w-5 text-[#FFFF]" />
    </div>
  </div>
);
};

export default SearchBar;
