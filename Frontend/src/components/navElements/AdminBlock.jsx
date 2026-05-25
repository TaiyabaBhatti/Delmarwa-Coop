import React from "react";
import { NavLink } from "react-router-dom";


const AdminBlock = () => {
  return (
    <div className="flex flex-row gap-x-1.5 items-center text-blue-950">
      <NavLink to={'/login'} className="text-sm font-semibold">Admin</NavLink>
    </div>
  );
};

export default AdminBlock;
