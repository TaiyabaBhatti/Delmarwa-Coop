import React from "react";
import { NavLink } from "react-router-dom";

const TabsBlock = ({ text, path }) => {
  return (
    <div className="relative py-4 w-fit ">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "active-link-effect text-sm font-semibold uppercase leading-5 text-red-900"
            : "text-sm font-semibold uppercase leading-5 text-black "
        }
      >
        {text}
      </NavLink>
    </div>
  );
};

export default TabsBlock;
