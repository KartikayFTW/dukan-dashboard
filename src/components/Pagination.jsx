import React from "react";
import PreviousIcon from "../assets/ChevronRight.png";
import NextIcon from "../assets/ChevronNext.png";

const Pagination = () => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-6 pt-4 pb-4 justify-center items-center">
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-2">
        <img src={PreviousIcon} className="h-4 w-4" />
        <span className="text-[#4D4D4D] text-sm"> Previous</span>
      </button>
      <span className="hidden sm:inline text-[#4D4D4D] text-sm">1</span>
      <span className="hidden md:inline text-[#4D4D4D] text-sm">...</span>
      <span className="bg-[#146EB4] px-2 py-1 rounded-[4px] text-white">
        10
      </span>
      <span className="hidden lg:inline text-[#4D4D4D] text-sm">11</span>
      <span className="hidden lg:inline text-[#4D4D4D] text-sm">12</span>
      <span className="hidden xl:inline text-[#4D4D4D] text-sm">13</span>
      <span className="hidden xl:inline text-[#4D4D4D] text-sm">14</span>

      <span className="text-[#4D4D4D] text-sm">15</span>
      <span className="text-[#4D4D4D] text-sm">16</span>
      <span className="hidden sm:inline text-[#4D4D4D] text-sm">17</span>
      <span className="hidden md:inline text-[#4D4D4D] text-sm">18</span>
      <button className="flex items-center gap-2 rounded-[4px] border border-[#D9D9D9] py-1 px-2">
        <span className="text-[#4D4D4D] text-sm"> Next</span>
        <img src={NextIcon} className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
