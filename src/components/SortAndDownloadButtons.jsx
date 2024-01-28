import React from "react";
import SortIcon from "../assets/Sort.png";
import DownloadIcon from "../assets/download.png";
const SortAndDownloadButtons = () => {
  return (
    <div className="flex gap-2 pr-4">
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-2">
        <span className="text-[#4D4D4D] leading-6"> Sort</span>
        <img src={SortIcon} className="h-4 w-4" />
      </button>
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-2">
        <img src={DownloadIcon} className="h-4 w-4" />
      </button>
    </div>
  );
};

export default SortAndDownloadButtons;
