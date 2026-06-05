import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";

const SearchBlock = () => {
  const [serach, setSearch] = useState("");

  return (
    <div className="transition-all duration-300 max-[1129px]:row-start-2 max-[1129px]:col-span-2 bg-gray-100 p-3.5 border-t-2 border-t-athens-gray sm:p-0 sm:bg-transparent sm:border-none ">
      <div className=" border-athens-gray bg-white sm:text-gray-600 sm:bg-gray-100 sm:border-gray-100 border flex flex-row gap-x-2 px-3 items-center p-2 rounded-sm w-full sm:min-w-96">
        <FaSearchengin className="text-lg" />
        <input
          id="search"
          className="outline-0 w-full"
          placeholder="Search for products"
          type="text"
          value={serach}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBlock;
