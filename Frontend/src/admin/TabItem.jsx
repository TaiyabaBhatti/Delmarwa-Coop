import React from "react";
import { NavLink } from "react-router-dom";

const TabItem = ({ icon, text, onClick }) => {
  return (
    <NavLink to={"/admin-panel/dashboard"}>
      <button
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <p className=" capitalize text-gray-600">{text}</p>
      </button>
    </NavLink>
  );
};

export default TabItem;
