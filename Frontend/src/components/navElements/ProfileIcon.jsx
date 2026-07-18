import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Logout from "../../components/navElements/Logout";
const ProfileIcon = ({ fullname }) => {
  const firstLetters = fullname
    ?.split(" ")
    .map((string, i) => string.charAt(0))
    .join("");

  return (
    <>
      <div className=" border-2 border-blue-zodiac/50 rounded-full flex items-center justify-center h-7 w-7 bg-blue-zodiac">
        <span className="text-white font-bold"> {firstLetters}</span>
      </div>
      <div className="hidden lg:block">
        <Logout />
      </div>
    </>
  );
};

export default ProfileIcon;
