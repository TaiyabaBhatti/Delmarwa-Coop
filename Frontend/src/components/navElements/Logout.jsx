import React, { useContext } from "react";
import { logout } from "../../api/authApi";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import { FaSignOutAlt } from "react-icons/fa";
import ButtonIconStyle from "./ButtonIconStyle";
import { CartContext } from "../../context/cartContext";

const Logout = () => {
  const { setCurrUser } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const response = await logout();
      setCurrUser(null);
      setCartItems([]);
      navigate(APP_ROUTES_NAME.homePage);
    } catch (error) {
      console.log(error);
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
