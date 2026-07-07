import React, { useState } from "react";
import ratingsData from "../../../manualData/ratings.json";
import FilterSection from "./FilterSection";
import FilterHeading from "./FilterHeading";
import DropDownBlock from "./DropDownBlock";
import { useSearchParams } from "react-router-dom";

const RatingStarCheckbox = ({ ratingStars, setFilters }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const existedParams = new URLSearchParams(searchParams);

  const handleRatingChange = (e) => {
    const value = Number(e.target.value);
    const checked = e.target.checked;
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        ratingStars: [...prev.ratingStars, value],
      }));

      // just one rating value saving
      existedParams.set("rating", value);
      setSearchParams(existedParams);
    } else {
      setFilters((prev) => ({
        ...prev,
        ratingStars: prev.ratingStars.filter(
          (ratingStar) => ratingStar !== value
        ),
      }));
    }
  };

  return (
    <FilterSection>
      <FilterHeading heading={"Ratings"} />

      <fieldset className="space-y-1">
        {ratingsData.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-x-2.5 ">
              <input
                className="filter-checkbox"
                type="checkbox"
                name=""
                id={item.id}
                value={item.label}
                checked={ratingStars.includes(item.label)}
                onChange={handleRatingChange}
              />
              <label
                className="capitalize text-sm text-gray-400"
                htmlFor={item.id}
              >
                {item.label}+ stars
              </label>
            </div>
          );
        })}
      </fieldset>
    </FilterSection>
  );
};

export default RatingStarCheckbox;
