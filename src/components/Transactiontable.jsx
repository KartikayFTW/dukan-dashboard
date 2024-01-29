import React from "react";
import TriangleIcon from "../assets/Triangle-Icon.png";
import InfoIcon from "../assets/Info.png";
const Transactiontable = () => {
  return (
    <div className="overflow-x-auto bg-white pl-3 pr-3">
      <table className="min-w-full ">
        <thead className="">
          <tr className="bg-[#F2F2F2] rounded-[4px] h-10">
            <th className="w-1/4 text-left pl-4 font-medium text-sm text-[#4D4D4D]">
              Order ID
            </th>
            <th className="w-1/4 text-left pl-8 font-medium text-sm text-[#4D4D4D]">
              <div className="flex justify-start items-center gap-2">
                <span>Order Date</span>
                <img src={TriangleIcon} className="h-2 w-2" />
              </div>
            </th>
            <th className="w-1/4 text-left pl-8 font-medium text-sm text-[#4D4D4D]">
              Order amount
            </th>
            <th className="w-1/4 text-right pr-4">
              <div className="flex justify-end items-center gap-2 font-medium text-sm text-[#4D4D4D]">
                <span>Transaction fees</span>
                <img src={InfoIcon} className="h-3.5 w-3.5" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white relative ">
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              key={index}
              className=" relative h-12   border-b-[1px] border-transparent "
            >
              <td className="w-1/4 text-left pl-5  font-medium text-sm text-[#146EB4] border-start">
                #28109
              </td>
              <td className="w-1/4 text-left pl-8 font-medium text-sm text-[#4D4D4D] ">
                7 July, 2023
              </td>
              <td className="w-1/4 text-left pl-8 font-medium text-sm text-[#4D4D4D] ">
              ₹ 1278.23
              </td>
              <td className="w-1/4 text-right pr-4 font-medium text-sm text-[#4D4D4D] border-end ">
              ₹ 22
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactiontable;
