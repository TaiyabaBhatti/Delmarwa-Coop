import React from "react";
import Wrapper from "../../components/Wrapper";
import AddressForm from "./AddressForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useEffect } from "react";

const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);
  return (
    <section className="bg-gray-100">
      <Wrapper properties="py-12">
        <AddressForm />
      </Wrapper>
    </section>
  );
};

export default CheckOutPage;
