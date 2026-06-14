import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
import RemoveButton from "./RemoveButton";
import CartTableItem from "./CartTableItem";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ButtonIconStyle from "../../components/navElements/ButtonIconStyle";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import OrderSummary from "./OrderSummary";

const CartTableView = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <section className="mt-5 flex gap-x-10">
      <section className="space-y-7">
        <table className="w-full  border-collapse overflow-hidden">
          <thead className=" bg-white">
            <tr className=" text-sm font-bold text-blue-zodiac text-left">
              <th className="p-3.5">Product</th>
              <th className="p-3.5">Price</th>
              <th className="p-3.5">Quantity</th>
              <th className="p-3.5">Total</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((product, index) => {
              return (
                <CartTableItem key={product.productId} product={product} />
              );
            })}
          </tbody>
        </table>
        <ButtonIconStyle>
          <NavLink
            to={APP_ROUTES_NAME.homePage}
            className="text-sm font-bold text-blue-zodiac uppercase flex items-center gap-x-2"
          >
            <FaArrowLeft />
            <span>Continue shopping</span>
          </NavLink>
        </ButtonIconStyle>
      </section>
      <OrderSummary />
    </section>
  );
};

export default CartTableView;
