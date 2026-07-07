import React from "react";

const FilterSection = ({ children }) => {
  return (
    <div className="space-y-2 p-2 md:px-5   md:border-b-2 md:border-b-gray-200 text-gray-700 font-semibold">
      {children}
    </div>
  );
};

export default FilterSection;
