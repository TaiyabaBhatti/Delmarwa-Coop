import React from "react";
import Headline from "./Headline";
import ProductCatlouge from "./ProductCatlouge";
import FilterPanel from "./filterPanel/FilterPanel";
import { useState } from "react";

const ShopPage = () => {
  const [filters, setFilters] = useState({
    priceRange: {
      min: 50,
      max: 1000,
    },
    ratingStars: [],
  });

  return (
    <section>
      <Headline />
      {/* product catelouge and filter panel */}

      <section className="bg-gray-100 p-5 relative z-40 flex gap-10 flex-row">
        {/* left col */}
        <FilterPanel filters={filters} setFilters={setFilters} />
        {/* right col */}
        <ProductCatlouge />
      </section>
    </section>
  );
};

export default ShopPage;
