import React from "react";

const Headline = ({ itemsNo }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-zodiac">
        Your Cart ({itemsNo} Items)
      </h1>
    </div>
  );
};

export default Headline;
