import React from "react";
import image from "../../assets/images/productImage.jpg";
import { FaStar } from "react-icons/fa6";
import ImageState from "../../components/StatesShowing.jsx/ImageState";
import { NavLink } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import ImageStateBlock from "../../components/StatesShowing.jsx/ImageStateBlock";

const ProductCard = ({ data }) => {
  const tempImagesFunction =
    data.imageUrls.length === 0 ? data.image[0] : data.imageUrls[0];
  return (
    <NavLink
      to={APP_ROUTES_NAME.productDetail.replace(":productId", data._id)}
      className={""}
    >
      <div className="rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-athens-gray max-w-md lg:min-w-3xs pt-2 min-h-96 justify-between">
        {/* product image */}

        <ImageStateBlock
          src={tempImagesFunction}
          alt={data.title}
          parentProperties={"h-40 relative"}
          childProperties={"h-40 object-cover w-full"}
        />

        {/* product details */}
        <div className="p-6 space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <h1 className="capitalize text-base xs:text-lg leading-4 xs:leading-6 font-bold text-blue-zodiac">
              {data.title}
            </h1>
            <h6 className="uppercase font-medium text-xs text-scarpa-flow">
              {data.brandName}
            </h6>
          </div>

          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center">
              <p className="font-extrabold text-lg xs:text-2xl text-tall-poppy">
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
      </div>
    </NavLink>
  );
};

export default ProductCard;
