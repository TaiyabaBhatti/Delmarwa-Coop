import React, { useContext } from "react";
import { FaPerson } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AccountPage from "../../pages/account/AccountPage";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import { AuthContext } from "../../context/authContext";
import Logout from "./Logout";
import { MdOutlineAccountCircle } from "react-icons/md";
import ButtonIconStyle from "./ButtonIconStyle";
import ProfileIcon from "./ProfileIcon";

const AccountBlock = () => {
  const { loginStatus, fullname } = useContext(AuthContext);
  return loginStatus ? (
    <ProfileIcon fullname={fullname} />
  ) : (
    <ButtonIconStyle>
      <NavLink
        to={APP_ROUTES_NAME.accountPage}
        className="flex flex-row gap-x-1.5 items-center text-blue-950"
      >
        <MdOutlineAccountCircle className="text-blue-zodiac text-lg font-black" />
        <p className="text-sm font-semibold hidden md:block">Sign In</p>
      </NavLink>
    </ButtonIconStyle>
  );
};

export default AccountBlock;
