import React from "react";
import SortIcon from "../assets/Sort.png";
import DownloadIcon from "../assets/download.png";
const SortAndDownloadButtons = () => {
  return (
    <div className="flex gap-2 pr-4 ">
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-4 sm:py-1 sm:px-2">
        <span className="text-[#4D4D4D] leading-6 text-sm sm:text-base"> Sort</span>
        <img src={SortIcon} className="sm:h-4 sm:w-4 w-3 h-3" />
      </button>
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-2 sm:py-1 sm:px-2 ">
      <div className="w-4 h-4">
      <img src={DownloadIcon} className="sm:h-4 sm:w-4 w-4 h-4" />
      </div>
      </button>
    </div>
  );
};

export default SortAndDownloadButtons;
