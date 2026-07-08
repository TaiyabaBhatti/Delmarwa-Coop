import React from "react";

import PriceRangeSlider from "./PriceRangeSlider";
import RatingStarCheckbox from "./RatingStarCheckbox";
import { useSearchParams } from "react-router-dom";

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <aside className="sticky top-0 z-50 self-start  h-screen md:h-screen w-60 md:w-72 border-r-2 border-r-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scroll-smooth ">
      {/* logo */}
      <div className="p-5 border-b-2 border-b-gray-200 ">
        {/* <PageLogo /> */}
        <span className="text-gray-700 font-semibold">Filter By</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-col gap-x-2 gap-y-1.5 py-2">
        {/* price range slider, */}
        <PriceRangeSlider
          priceRange={filters.priceRange}
          setFilters={setFilters}
        />

        {/* star rating filter (1-5, multi-select), */}

        <RatingStarCheckbox
          ratingStars={filters.ratingStars}
          setFilters={setFilters}
        />
      </div>
    </aside>
  );
};

export default FilterPanel;
