import React from "react";
import ButtonIconStyle from "./navElements/ButtonIconStyle";
import { IoIosRefreshCircle } from "react-icons/io";

const RefreshButton = ({ func }) => {
  return (
    <button
      onClick={func}
      className={` cursor-pointer transition-transform duration-150
    hover:brightness-150
    active:scale-90
    `}
    >
      <IoIosRefreshCircle className="text-blue-zodiac  text-2xl font-black" />
    </button>
  );
};

export default RefreshButton;
