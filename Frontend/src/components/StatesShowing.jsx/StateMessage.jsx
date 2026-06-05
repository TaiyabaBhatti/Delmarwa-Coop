import React from "react";

const StateMessage = ({ text, properties }) => {
  return (
    <div className="w-full mt-10">
      <p className={`text-center font-bold  ${properties}`}>{text}</p>
    </div>
  );
};

export default StateMessage;
