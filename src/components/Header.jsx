import React from "react";
import HelpIcon from "../assets/Help.png";
import SearchIcon from "../assets/search.png";
import GroupIcon from "../assets/Group.png";
import MenuIcon from "../assets/menu.png";
import EllipseIcon from "../assets/Ellipse.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] py-4 px-8">
      <div className="flex gap-4">
        <span className="leading-6 text-[#1A181E]">Payments</span>
        <div className="flex gap-2 justify-center items-center">
          <img src={HelpIcon} className="h-3.5 w-3.5" />
          <span className="text-xs leading-4 text-[#4D4D4D]">How it works</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={SearchIcon} className="h-4 w-4 relative left-8" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="text-[#808080] leading-6 bg-[#F2F2F2] w-[480px] min-w-96 px-12 text-left py-2 rounded-md"
        />
      </div>
      <div className="flex gap-8">
        <img src={EllipseIcon} className="h-10 w-10 absolute" />
        <img src={GroupIcon} className=" h-5 w-5 relative top-2.5 left-2  " />

        <img src={MenuIcon} className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Header;
