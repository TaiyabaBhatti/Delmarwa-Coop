import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../api/productApi";
import Loading from "../../components/StatesShowing.jsx/Loading";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
const ProductCatlouge = () => {
  // ui states for showing
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // data state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await getAllProducts();
        const productData = response.data.data;
        setProducts(productData);
        setErrorMessage(null);
       
      } catch (error) {
        console.log(error);
        setErrorMessage(
          error.response?.data?.message || "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-12 px-56">
      <section className="flex flex-row gap-4 flex-wrap">
        {/* loading */}
        {loading && <Loading text={"Getting Products..."} />}
        {/* error */}
        {!loading && errorMessage && (
          <StateMessage text={errorMessage} properties={"text-tall-poppy"} />
        )}

        {/* empty  */}
        {!loading && !errorMessage && products.length === 0 && (
          <StateMessage
            text={"No Products Available"}
            properties={"text-scarpa-flow"}
          />
        )}

        {/* exists */}
        {!loading && !errorMessage && products.length > 0 && (
           
        products.map((product)=>{
            
           
          return  <ProductCard data={product} key={product._id}/>
            
        })
        )}
      </section>
    </section>
  );
};

export default ProductCatlouge;
