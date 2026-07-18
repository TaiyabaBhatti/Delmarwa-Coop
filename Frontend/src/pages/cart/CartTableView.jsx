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
    <section className="mt-5 flex gap-10 flex-col sm:flex-row">
      <section className="space-y-7 min-w-0 flex-1 ">
        <section className="overflow-x-auto w-full">
          <table className="w-full  border-collapse min-w-87.5 sm:min-w-112.5">
            <thead className=" bg-white">
              <tr className=" text-sm font-bold text-blue-zodiac text-left">
                <th className="p-3.5">Product</th>
                <th className="py-3.5 px-1 sm:p-3.5">Price</th>
                <th className="p-3.5">Quantity</th>
                <th className="py-3.5 px-1 sm:p-3.5">Total</th>
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
        </section>

        <ButtonIconStyle>
          <NavLink
            to={APP_ROUTES_NAME.productsPage}
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
