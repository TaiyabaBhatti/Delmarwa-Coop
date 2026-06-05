import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ProfileIcon = ({ fullname }) => {
  const firstLetters = fullname
    .split(" ")
    .map((string, i) => string.charAt(0))
    .join("");

  return <div>{firstLetters}</div>;
};

export default ProfileIcon;
