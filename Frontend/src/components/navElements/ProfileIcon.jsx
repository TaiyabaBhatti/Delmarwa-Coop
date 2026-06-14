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
      <div>{firstLetters}</div>
      <Logout />
    </>
  );
};

export default ProfileIcon;
