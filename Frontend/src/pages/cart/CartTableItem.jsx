import React, { useContext } from "react";
import RemoveButton from "./RemoveButton";
import { CartContext } from "../../context/cartContext";

const CartTableItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  return (
    <tr key={product.productId}>
      <td className="py-3.5 pl-1 pr-2 sm:p-3.5 flex items-center gap-2 xl:gap-3.5">
        <img
          src={product?.image}
          alt="product"
          className="w-14 h-14  sm:w-20 sm:h-20  object-cover rounded"
        />
        <div>
          <p className="font-bold text-blue-zodiac text-xs leading-tight!  xl:text-base">
            {product?.title}
          </p>
          <RemoveButton
            func={() => {
              removeFromCart(product.productId);
            }}
          />
        </div>
      </td>

      <td className="py-3.5 px-1 sm:p-3.5 text-sm sm:text-base font-normal text-blue-zodiac">
        ${product?.price}
      </td>

      {/* quanity adjust buttons */}
      <td className="">
        <div className="flex items-center">
          <button
            disabled={product.quantity === 1}
            onClick={() => decreaseQuantity(product.productId)}
            className=" h-8 w-5 sm:h-11 sm:w-7 bg-gray-200 cursor-pointer active:scale-105 disabled:opacity-60
    disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="bg-white h-8 w-8 p-1 sm:h-11 sm:w-10 text-center border-x border-x-athens-gray">
            {product?.quantity}
          </span>
          <button
            disabled={product.quantity === product.stockCount}
            onClick={() => increaseQuantity(product.productId)}
            className="h-8 w-5 sm:h-11 sm:w-7 bg-gray-200 cursor-pointer active:scale-105 disabled:opacity-60
    disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-3.5 px-1 sm:p-3.5 text-sm sm:text-base  font-bold text-blue-zodiac">
        ${product.price * product.quantity}
      </td>
    </tr>
  );
};

export default CartTableItem;
