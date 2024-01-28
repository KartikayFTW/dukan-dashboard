import React from "react";

import Header from "./Header";
import OverviewHeader from "./OverviewHeader";
import StatsCard from "./StatsCard";
import SearchBar from "./SearchBar";
import SortAndDownloadButtons from "./SortAndDownloadButtons";
import Transactiontable from "./Transactiontable";
import Pagination from "./Pagination";
const MainContent = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="px-6 pt-8 bg-[#FAFAFA]">
        <OverviewHeader />
        <div className="flex py-4 gap-4 justify-between w-full">
          <StatsCard title="Online Orders" value="231" />
          <StatsCard title="Amount Received" value=" ₹23,92,312.19" />
        </div>
        <p className="text-[#1A181E] text-xl font-medium leading-7 py-2">
          Transaction | This Month
        </p>
        <div className="">
          <div className="pb-5  bg-white flex justify-between items-center pt-4 ">
            <SearchBar />
            <SortAndDownloadButtons />
          </div>
          <Transactiontable />
        </div>

        <Pagination />

        <span className="flex justify-center">
          Crafted with ❤️ by &nbsp;
          <a
            href="https://twitter.com/Dwivkart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Kartikay
          </a>
        </span>
      </div>
    </div>
  );
};

export default MainContent;
