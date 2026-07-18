import React, { useContext } from "react";
import Wrapper from "../../components/Wrapper";
import Headline from "./Headline";
import CartTableView from "./CartTableView";
import { CartContext } from "../../context/cartContext";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Wrapper properties={"bg-gray-100 py-12"}>
      <Headline itemsNo={cartItems.length} />
      {cartItems.length != 0 ? (
        <CartTableView />
      ) : (
        <StateMessage text={"Your cart is empty"} />
      )}
    </Wrapper>
  );
};

export default CartPage;
