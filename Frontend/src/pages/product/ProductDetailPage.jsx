import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../api/productApi';
import StateMessage from '../../components/StatesShowing.jsx/StateMessage';
import Loading from '../../components/StatesShowing.jsx/Loading';
import ProductCard from '../shop/ProductCard';
import TwoColLayout from './TwoColLayout';
import Wrapper from '../../components/Wrapper';


const ProductDetailPage = () => {
    const {productId} = useParams();
      // ui states for showing
      const [loading, setLoading] = useState(true);
      const [errorMessage, setErrorMessage] = useState(null);
    
      // data state
      const [product, setProduct] = useState(null);

   useEffect(() => {
       const getProduct = async () => {
         setLoading(true);
         try {
           const response = await getSingleProduct(productId);
           const productData = response.data.data;
           setProduct(productData);
           setErrorMessage(null);
           
        
         } catch (error) {
           console.log(error);
           setErrorMessage(
             error.response?.data?.message || "Failed to fetch product"
           );
         } finally {
           setLoading(false);
         }
       };
   
       getProduct();
     }, [productId]);
    return (
        
      <section className='bg-gray-100'>
         <Wrapper properties={"py-12 "}>
        {/* loading */}
        {loading && <Loading text={"Getting Products..."} />}
        {/* error */}
        {!loading && errorMessage && (
          <StateMessage text={errorMessage} properties={"text-tall-poppy"} />
        )}

        {/* empty  */}
        {!loading && !errorMessage && !product && (
          <StateMessage
            text={"No Product Available"}
            properties={"text-scarpa-flow"}
          />
        )}

         {/* exists */}
        {!loading && !errorMessage && product && (
        <TwoColLayout data={product} key={product._id}/>
        )}
        </Wrapper>
       </section>
     
    );
}

export default ProductDetailPage;
