import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearchengin } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const SearchBlock = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (e) => {
    e.preventDefault();
    params.set("search", searchInput);
    setSearchParams(params);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="transition-all duration-300  bg-gray-100"
    >
      <div className=" border-athens-gray bg-white sm:text-gray-600 sm:bg-gray-100 sm:border-gray-100 border flex flex-row gap-x-2 px-3 items-center p-2 rounded-sm w-full sm:min-w-96">
        <FaSearchengin className="text-lg" />
        <input
          id="search"
          className="outline-0 w-full"
          placeholder="Search for products"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchBlock;
