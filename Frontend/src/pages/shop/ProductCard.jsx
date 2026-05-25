import React from "react";
import image from "../../assets/images/productImage.jpg";
import { FaStar } from "react-icons/fa6";
import ImageState from "../../components/StatesShowing.jsx/ImageState";
import {NavLink} from 'react-router-dom'
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";

const ProductCard = ({ data }) => {
  // console.log(data);
  return (
   <NavLink to={APP_ROUTES_NAME.productDetail.replace(":productId",data._id)} className={""}>
     <div className="rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-athens-gray min-w-3xs pt-2">
      {/* product image */}
      <ImageState src={data.image[0]}/>

      {/* product details */}
      <div className="p-6 space-y-3">
        <div>
          <h1 className="capitalize text-lg leading-6 font-bold text-blue-zodiac">
            {data.title}
          </h1>
          <h6 className="uppercase font-medium text-xs text-scarpa-flow">
            {data.brandName}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="font-extrabold text-2xl text-tall-poppy">
            ${data.price}
          </p>
          <div className="text-buttercup text-sm flex flex-row items-center gap-x-1.5">
            <FaStar className="font-black" />
            <span className="font-semibold">{data.rating}</span>
          </div>
        </div>

        <button className="uppercase rounded-sm bg-tall-poppy text-white text-sm font-bold w-full py-3 px-5 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
   </NavLink>
   
  );
};

export default ProductCard;
