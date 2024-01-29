import React from "react";

const StatsCard = ({ title, value }) => (
  <div className="bg-white w-full sm:w-1/2 flex flex-col gap-4 pt-5 pb-5 px-4">
    <p className="text-[#4D4D4D] leading-6">{title}</p>
    <p className="text-[#1A181E] font-medium leading-[38px] text-[32px]">
      {value}
    </p>
  </div>
);

export default StatsCard;
