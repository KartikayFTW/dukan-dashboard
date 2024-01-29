import React from "react";
import SearchIcon from "../assets/search.png";
const SearchBar = () => {
  return (
    <div className="flex items-center ">
      <img src={SearchIcon} className="h-3.5 w-3.5 relative left-8" />
      <input
        type="text"
        placeholder="Search by order ID..."
        className="text-[#999] text-sm sm:w-full w-1/2  px-12 text-left py-2 border border-[#D9D9D9] rounded-[4px] focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
