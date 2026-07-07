import React, { useState } from "react";
import FilterSection from "./FilterSection";
import FilterHeading from "./FilterHeading";
import DropDownBlock from "./DropDownBlock";
import { useSearchParams } from "react-router-dom";

const PriceRangeSlider = ({ priceRange, setFilters }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const existedParams = new URLSearchParams(searchParams);

  const MIN_PRICE = 5;
  const MAX_PRICE = 1500;

  //   we will extract percentages for range indicators from prices
  //  general formal is ((price - min)/(max - min)) * 100
  // number between 0 and 1
  const minPercent =
    ((priceRange.min - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent =
    ((priceRange.max - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange.min + 1);
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, max: value },
    }));
    existedParams.set("maxPrice", value);
    setSearchParams(existedParams);
  };

  const handleMinPriceChange = (e) => {
    // value is a string we will cahneg this
    const value = Math.min(Number(e.target.value), priceRange.max - 1);
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, min: value },
    }));
    existedParams.set("minPrice", value);
    setSearchParams(existedParams);
  };

  return (
    <>
      {/* price range slider, */}
      <FilterSection>
        <FilterHeading heading={"Price per night"} />

        <div className="flex items-center gap-x-2">
          <div className="py-0.5 px-2 rounded-2xl min-w-18 border-[1.5px] border-gray-200 text-xs bg-blue-zodiac/10 ">
            ${priceRange.min}{" "}
          </div>

          <div className="py-0.5 px-2 rounded-2xl min-w-18 border-[1.5px] border-gray-200 text-xs bg-blue-zodiac/10 ">
            ${priceRange.max}
          </div>
        </div>
        <div className="slider-wrapper relative h-10">
          <div className="slider-track rounded-lg top-1/2 h-1 absolute -translate-y-1/2 bg-gray-200 w-full"></div>

          <div
            className={`price-slider-range bg-blue-zodiac/30 rounded-lg absolute top-1/2 h-1 -translate-y-1/2`}
            style={{
              left: `${minPercent}%`,

              width: `${maxPercent - minPercent}%`,
            }}
          ></div>

          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={priceRange.min}
            onChange={handleMinPriceChange}
            className="price-slider-thumb price-slider-thumb-left "
          />

          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={priceRange.max}
            onChange={handleMaxPriceChange}
            className="price-slider-thumb price-slider-thumb-right"
          />
        </div>
      </FilterSection>
    </>
  );
};

export default PriceRangeSlider;
