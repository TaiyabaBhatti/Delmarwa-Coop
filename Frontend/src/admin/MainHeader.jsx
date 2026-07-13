import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { APP_ROUTES_NAME } from "../utils/appRoutesNames";

const MainHeader = ({ title }) => {
  return (
    <div className="border-b-2 p-5 h-20 border-b-gray-200 w-full flex items-center justify-between">
      <div>
        <h5 className="text-2xl text-gray-500">{title}</h5>
      </div>

      <div className="flex items-center gap-x-6">
        <button className="cursor-pointer bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-all duration-200">
          {" "}
          <IoNotifications />
        </button>

        <NavLink to={APP_ROUTES_NAME.createProduct}>
          <button className="bg-green-haze text-sm font-bold rounded-lg py-2 px-4 btn-effect flex items-center gap-x-1 cursor-pointer">
            <IoMdAdd className="text-lg" />
            <span>Add Product</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MainHeader;
