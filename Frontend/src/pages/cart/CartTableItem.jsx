import React, { useContext } from "react";
import RemoveButton from "./RemoveButton";
import { CartContext } from "../../context/cartContext";

const CartTableItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  return (
    <tr key={product.productId}>
      <td className="p-3.5 flex items-center gap-3.5">
        <img
          src={product?.image}
          alt="product"
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <span className="font-bold text-blue-zodiac">{product?.title}</span>
          <RemoveButton
            func={() => {
              removeFromCart(product.productId);
            }}
          />
        </div>
      </td>

      <td className="p-3.5 font-normal text-blue-zodiac">${product?.price}</td>

      {/* quanity adjust buttons */}
      <td className="">
        <div className="flex items-center">
          <button
            disabled={product.quantity === 1}
            onClick={() => decreaseQuantity(product.productId)}
            className="px-2 py-1 h-11 w-7 bg-gray-200 cursor-pointer active:scale-105 disabled:opacity-60
    disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="bg-white h-11 w-10 p-3 text-center border-x border-x-athens-gray">
            {product?.quantity}
          </span>
          <button
            disabled={product.quantity === product.stockCount}
            onClick={() => increaseQuantity(product.productId)}
            className="px-2 py-1 h-11 w-7 bg-gray-200 cursor-pointer active:scale-105 disabled:opacity-60
    disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3.5 font-bold text-blue-zodiac">
        ${product.price * product.quantity}
      </td>
    </tr>
  );
};

export default CartTableItem;
