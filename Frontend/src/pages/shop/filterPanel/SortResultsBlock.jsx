import React, { useState } from "react";
import { GrSort } from "react-icons/gr";
import FilterHeading from "./FilterHeading";
import DropDownBlock from "./DropDownBlock";

const SortResultsBlock = ({ sortBy, setSortBy }) => {
  const [dropDown, setDropDown] = useState(false);
  const sortValues = [
    { name: "popularity", value: "popularity" },
    { name: "low-to-high", value: "Low to High" },
    { name: "high-to-low", value: "High to Low" },
  ];
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="space-y-2 px-3  text-gray-700 font-semibold relative">
      <FilterHeading
        heading={"Sort"}
        dropDown={dropDown}
        handleDropDown={handleDropDown}
        childProperties="text-xs!"
        parentProperties=""
      />
      <div
        className={`absolute right-0 bg-white w-52 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out
    ${
      dropDown
        ? "max-h-96 opacity-100 translate-y-0 border border-haze-green/30 px-3 py-1.5"
        : "max-h-0 opacity-0 -translate-y-2 "
    }
   
       flex flex-col items-start text-sm font-semibold text-gray-500`}
      >
        {sortValues.map((sortby, index) => {
          return (
            <button
              onClick={() => setSortBy(sortby.name)}
              className={`cursor-pointer transition-transform duration-150
      active:scale-95 ${
        sortBy === sortby.name
          ? "bg-gray-300 text-gray-700 border-gray-400 scale-95 rounded-lg w-full text-start py-1 px-2"
          : " border-haze-green/15 hover:brightness-110 hover:scale-105"
      }`}
            >
              {sortby.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SortResultsBlock;
