import React from "react";
import HelpIcon from "../assets/Help.png";
import SearchIcon from "../assets/search.png";
import GroupIcon from "../assets/Group.png";
import MenuIcon from "../assets/menu.png";
import MobileMenuIcon from "../assets/arrange.png";
import EllipseIcon from "../assets/Ellipse.png";
import { useSidebarContext } from "../context/SidebarContext";
const Header = () => {
  const { toggleSidebar } = useSidebarContext();
  return (
    <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] py-4 px-8 sticky top-0 bg-white z-20">
      <div className="flex gap-3">
        <div onClick={toggleSidebar} className="lg:hidden cursor-pointer -ml-4">
          <img src={MobileMenuIcon} />
        </div>
        <span className="leading-6 text-[#1A181E]">Payments</span>
        <div className="flex gap-2 justify-center items-center">
          <img src={HelpIcon} className="h-3.5 w-3.5" />
          <span className="text-xs leading-4 text-[#4D4D4D] sm:block hidden">
            How it works
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={SearchIcon} className="h-4 w-4 relative left-8" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="text-[#808080] leading-6 bg-[#F2F2F2] w-16 sm:w-56  xl:w-[480px] md:w-72  px-12 text-left py-2 rounded-md focus:outline-none"
        />
      </div>
      <div className="flex gap-6 sm:gap-8 sm:-mr-0 -mr-5">
        <img src={EllipseIcon} className="h-7 w-7 absolute sm:h-10 sm:w-10" />
        <img
          src={GroupIcon}
          className="h-3 w-3 sm:h-5 sm:w-5 relative sm:top-2.5 top-2 left-2"
        />

        <img src={MenuIcon} className="sm:h-10 sm:w-10 h-7 w-7" />
      </div>
    </div>
  );
};

export default Header;
