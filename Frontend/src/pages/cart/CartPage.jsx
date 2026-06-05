import React from "react";
import Wrapper from "../../components/Wrapper";
import Headline from "./Headline";
import CartTableView from "./CartTableView";
Headline;

const CartPage = () => {
  return (
    <section className="bg-gray-100">
      <Wrapper properties={"py-12"}>
        <Headline />
        <CartTableView />
      </Wrapper>
      ;
    </section>
  );
};

export default CartPage;
