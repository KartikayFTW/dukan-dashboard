import React from "react";
import ArrowIcon from "../assets/arrow.png";
const OverviewHeader = () => {
  return (
    <div className="flex justify-between">
      <span className="text-[#1A181E] text-xl font-medium leading-7">
        Overview
      </span>
      <div className="flex justify-center items-center bg-white rounded-sm border border-[#D9D9D9] gap-2 px-3 py-1">
        <span className=" text-gray-900  leading-6 ">Last Month</span>
        <img src={ArrowIcon} className="w-4 h-4" />
      </div>
    </div>
  );
};

export default OverviewHeader;
