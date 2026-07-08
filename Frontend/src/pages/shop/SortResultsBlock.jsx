import React, { useState } from "react";
import { GrSort } from "react-icons/gr";
import FilterHeading from "./filterPanel/FilterHeading";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const SortResultsBlock = ({ existedParams, setSearchParams }) => {
  const [sortBy, setSortBy] = useState();

  const [dropDown, setDropDown] = useState(false);
  const sortValues = [
    { name: "price_asc", value: "Price Low to High" },
    { name: "price_desc", value: "Price High to Low" },
  ];
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleSort = (selectedValue) => {
    setSortBy(selectedValue);
    existedParams.set("sort", selectedValue);
    setSearchParams(existedParams);
  };

  return (
    <div className="space-y-2  text-gray-700 font-semibold relative">
      <div
        className={`flex items-center gap-x-2 rounded-2xl bg-blue-zodiac/20 w-fit m-0 px-2.5 py-1`}
      >
        <h5
          className={`text-gray-800  font-bold text-sm uppercase tracking-wide `}
        >
          SORT
        </h5>
        <button className="cursor-pointer" onClick={() => handleDropDown()}>
          {dropDown ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      <div
        className={`absolute right-0 bg-white w-52 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out
    ${
      dropDown
        ? "max-h-96  opacity-100 translate-y-0 border border-blue-zodiac/30 px-3 py-2"
        : "max-h-0 opacity-0 -translate-y-2 "
    }
   
       flex flex-col items-start text-sm font-semibold text-gray-500`}
      >
        {sortValues.map((sortby, index) => {
          return (
            <button
              key={index}
              onClick={(e) => handleSort(sortby.name)}
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
