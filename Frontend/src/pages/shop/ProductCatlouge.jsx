import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../api/productApi";
import Loading from "../../components/StatesShowing.jsx/Loading";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
import Wrapper from "../../components/Wrapper";
import { getErrorMessage } from "../../utils/getErrorMessage";
import RefreshButton from "../../components/RefreshButton";
import { useSearchParams } from "react-router-dom";
import SortResultsBlock from "./SortResultsBlock";

const ProductCatlouge = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const existedParams = new URLSearchParams(searchParams);
  const search = searchParams.get("search");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const rating = searchParams.get("rating");
  const sort = searchParams.get("sort");
  // ui states for showing
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // data state
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts({
        search,
        minPrice,
        maxPrice,
        rating,
        sort,
      });
      const productData = response.data.data;
      setProducts(productData);
      setErrorMessage(null);
      console.log(productData);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [search, minPrice, maxPrice, rating, sort]);
  return (
    <section className="w-full">
      <div className="relative flex justify-between items-center z-50">
        <RefreshButton func={getProducts} />
        <SortResultsBlock
          existedParams={existedParams}
          setSearchParams={setSearchParams}
        />
      </div>

      <main className="flex-1 space-y-2 relative z-30">
        {/* loading */}
        {loading && <Loading text={"Getting Products..."} />}
        {/* error */}
        {!loading && errorMessage && (
          <StateMessage text={errorMessage} properties={"text-tall-poppy "} />
        )}

        {/* empty  */}
        {!loading && !errorMessage && products.length === 0 && (
          <StateMessage
            text={"No Products Available"}
            properties={"text-scarpa-flow"}
          />
        )}
        {/* exists */}
        <section className="grid grid-cols-2 max-lg:grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
          {!loading &&
            !errorMessage &&
            products.length > 0 &&
            products.map((product) => {
              return <ProductCard data={product} key={product._id} />;
            })}
        </section>
      </main>
    </section>
  );
};

export default ProductCatlouge;
