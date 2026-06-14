import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../api/productApi";
import Loading from "../../components/StatesShowing.jsx/Loading";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
import Wrapper from "../../components/Wrapper";
import { getErrorMessage } from "../../utils/getErrorMessage";
import RefreshButton from "../../components/RefreshButton";
const ProductCatlouge = () => {
  // ui states for showing
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // data state
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();
      const productData = response.data.data;
      setProducts(productData);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper properties={"py-12"}>
      {errorMessage && <RefreshButton func={getProducts} />}
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
      <section className="grid grid-cols-2 max-lg:grid-cols-1 xl:grid-cols-3 gap-4">
        {!loading &&
          !errorMessage &&
          products.length > 0 &&
          products.map((product) => {
            return <ProductCard data={product} key={product._id} />;
          })}
      </section>
    </Wrapper>
  );
};

export default ProductCatlouge;
