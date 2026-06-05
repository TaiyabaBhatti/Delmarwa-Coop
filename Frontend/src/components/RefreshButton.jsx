import React from "react";
import ButtonIconStyle from "./navElements/ButtonIconStyle";
import { IoIosRefreshCircle } from "react-icons/io";

const RefreshButton = ({ func }) => {
  return (
    <ButtonIconStyle func={func}>
      <IoIosRefreshCircle className="text-blue-zodiac text-lg font-black" />
    </ButtonIconStyle>
  );
};

export default RefreshButton;
