import React from "react";
import ProfilePhoto from "../assets/profile.png";
import { ShevronDown } from "../Icons/Icon";
import HomeIcon from "../assets/HomeIcon.png";
import OrdersIcon from "../assets/OrderIcon.png";
import ProductsIcon from "../assets/ProductsIcon.png";
import DeliveryIcon from "../assets/DeliveryIcon.png";
import MarketingIcon from "../assets/MarketingIcon.png";
import AnalyticsIcon from "../assets/AnalyticsIcon.png";
import PaymentsIcon from "../assets/PaymentsIcon.png";
import ToolsIcon from "../assets/ToolsIcon.png";
import DiscountsIcon from "../assets/DiscountsIcon.png";
import AudienceIcon from "../assets/AudienceIcon.png";
import AppearanceIcon from "../assets/AppearanceIcon.png";
import PluginsIcon from "../assets/PluginsIcon.png";
import WalletIcon from "../assets/Wallet.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const items = [
    { icon: HomeIcon, label: "Home" },
    { icon: OrdersIcon, label: "Orders" },
    { icon: ProductsIcon, label: "Products" },
    { icon: DeliveryIcon, label: "Delivery" },
    { icon: MarketingIcon, label: "Marketing" },
    { icon: AnalyticsIcon, label: "Analytics" },
    { icon: PaymentsIcon, label: "Payments" },
    { icon: ToolsIcon, label: "Tools" },
    { icon: DiscountsIcon, label: "Discounts" },
    { icon: AudienceIcon, label: "Audience" },
    { icon: AppearanceIcon, label: "Appearance" },
    { icon: PluginsIcon, label: "Plugins" },
  ];
  return (
    <div className="bg-[#1E2640] w-72 h-screen px-4 py-2 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <img src={ProfilePhoto} className="h-10 w-10" />
          <div className="flex flex-col -ml-8">
            <span className="text-white font-medium">Nishyan</span>
            <span className="underline text-white opacity-80 font-sm">
              Visit store
            </span>
          </div>
          <ShevronDown />
        </div>
        <ul className="pt-8 flex flex-col gap-6">
          {items.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </div>
      <div className="flex bg-[#353C53] gap-12  items-center pb-2 pt-2 justify-center rounded-[4px] mb-3">
        <div className="bg-[#353C53] opacity-100">
          <div className="bg-[#353C53] rounded-lg  -ml-8">
            <img src={WalletIcon} className="h-6 w-6" />
          </div>
        </div>
        <div className="flex flex-col -ml-8">
          <span className="text-white text-sm opacity-80">
            Available Credits
          </span>
          <span className="font-medium text-white  ">222.10</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
