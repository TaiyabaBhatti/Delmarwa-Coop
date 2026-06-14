import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import StockBlock from "./StockBlock";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import ButtonSubmit from "../account/ButtonSubmit";

const ProductBio = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const { loginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCart = () => {
    if (loginStatus) {
      addToCart({
        productId: data._id,
        title: data.title,
        price: data.price,
        image: data.image[0],
        stockCount: data.stockCount,
      });
      navigate(APP_ROUTES_NAME.cartPage);
    } else {
      navigate(APP_ROUTES_NAME.accountPage);
    }
  };

  return (
    <div className="space-y-2.5 sm:space-y-5">
      {/* heading */}
      <h1 className="text-blue-zodiac text-2xl sm:text-3xl font-bold">
        {data.title}
      </h1>

      {/* brand and rating */}
      <div className="flex flex-row items-center gap-x-2.5">
        <p className="text-sm font-normal">
          <span className="text-scarpa-flow ">Brand:</span>{" "}
          <span className="text-st-Tropaz">{data.brandName}</span>
        </p>
        <p className=" text-sm flex flex-row items-center gap-x-1">
          <FaStar className="font-black text-buttercup" />
          <span className="font-normal text-scarpa-flow">
            <span>{data.rating}</span>
            <span>({data.numReviews})</span>
          </span>
        </p>
      </div>

      {/* stock status */}
      <StockBlock stock={data.stockCount} />

      {/* price */}
      <p className="text-3xl sm:text-4xl font-extrabold text-tall-poppy">
        ${data.price}
      </p>
      {/* description */}
      <p className="text-blue-zodiac font-normal leading-6">
        {data.description}
      </p>

      <ButtonSubmit
        value={"Add to cart"}
        func={() => handleCart()}
        properties={"w-60! xl:w-80!"}
      />
    </div>
  );
};

export default ProductBio;
