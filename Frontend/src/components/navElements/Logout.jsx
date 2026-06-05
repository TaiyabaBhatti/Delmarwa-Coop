import React, { useContext } from "react";
import { logout } from "../../api/authApi";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import { FaSignOutAlt } from "react-icons/fa";
import ButtonIconStyle from "./ButtonIconStyle";

const Logout = () => {
  const { setLoginStatus, setCurrUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const response = await logout();
      setLoginStatus(false);
      setCurrUser(false);
      navigate(APP_ROUTES_NAME.homePage);
    } catch (error) {
      console.log(error);
      console.log(`${error.response} ${error.status}`);
    } finally {
    }

    logout();
  };

  return (
    <ButtonIconStyle func={logoutUser}>
      {" "}
      <FaSignOutAlt className=" text-2xl text-blue-zodiac font-black" />
    </ButtonIconStyle>
  );
};

export default Logout;
