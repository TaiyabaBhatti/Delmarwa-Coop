import React from "react";

const Loading = ({ text, properties }) => {
  return (
    <div className={`w-full mt-10 ${properties}`}>
      <p className="text-center text-blue-zodiac/70 font-bold animate-pulse">
        {text} ...
      </p>
    </div>
  );
};

export default Loading;
