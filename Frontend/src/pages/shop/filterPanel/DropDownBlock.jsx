import React from "react";

const DropDownBlock = ({ children, dropDown, properties = "" }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out
    ${
      dropDown
        ? "max-h-96 opacity-100 translate-y-0 sm:max-h-none sm:opacity-100 sm:translate-y-0 md:max-h-96 md:opacity-100 md:translate-y-0 p-2"
        : "max-h-0 opacity-0 -translate-y-2 sm:max-h-none sm:opacity-100 sm:translate-y-0 md:max-h-0 md:opacity-0 md:-translate-y-2 md:p-0 sm:p-2"
    }
    shadow-[0_4px_12px_2px_rgba(41,167,68,0.15)]
    md:shadow-none   rounded-lg ${properties}`}
    >
      {children}
    </div>
  );
};

export default DropDownBlock;
