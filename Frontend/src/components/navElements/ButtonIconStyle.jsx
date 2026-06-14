import React from "react";

const ButtonIconStyle = ({ func = null, children }) => {
  return (
    <button
      onClick={func}
      className={` cursor-pointer transition-transform duration-150
    hover:brightness-150
   
    active:scale-90

    `}
    >
      {children}
    </button>
  );
};

export default ButtonIconStyle;
