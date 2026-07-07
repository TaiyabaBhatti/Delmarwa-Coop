import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

const FilterHeading = ({ heading, childProperties = "" }) => {
  return (
    <h5
      className={`text-gray-800/50 mb-5 font-bold text-sm uppercase tracking-wide ${childProperties}`}
    >
      {heading}
    </h5>
  );
};

export default FilterHeading;
