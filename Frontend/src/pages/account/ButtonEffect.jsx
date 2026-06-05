import React from "react";

const ButtonEffect = ({ message, action, status,setAccountToggle }) => {
  return (
    <div className="flex flex-row items-center gap-x-1 justify-end text-xs font-normal text-st-Tropaz">
      <span>{message}</span>
      <button
        onClick={(e) => setAccountToggle(status)}
        className="cursor-pointer underline font-semibold  hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        {action}.
      </button>
    </div>
  );
};

export default ButtonEffect;
