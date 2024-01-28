const SidebarItem = ({ icon, label }) => (
  <li className="flex gap-4 px-2">
    <img src={icon} className="w-5 h-5" />
    <span className="text-white opacity-80 text-sm font-medium leading-5">
      {label}
    </span>
  </li>
);

export default SidebarItem;
