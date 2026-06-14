import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import ButtonIconStyle from "./ButtonIconStyle";
import { NavLink } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";

const CartBlock = () => {
  return (
    <ButtonIconStyle>
      <NavLink
        to={APP_ROUTES_NAME.cartPage}
        className="flex flex-row gap-x-1.5 items-center text-blue-950"
      >
        <FaCartShopping className="text-blue-zodiac text-lg font-black" />
        {/* <p className="text-sm font-semibold md:block hidden">$45.66</p> */}
      </NavLink>
    </ButtonIconStyle>
  );
};

export default CartBlock;
