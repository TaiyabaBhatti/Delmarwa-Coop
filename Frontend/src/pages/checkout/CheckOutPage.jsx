import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import AddressForm from "./AddressForm";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useEffect } from "react";
import OrderCreationSuccessPage from "./OrderCreationSuccessPage";
import Payment from "./Payment";

const CheckOutPage = () => {
  return (
    <section className="bg-gray-100">
      <Wrapper properties="py-12">
        {/* multi-step compoennt replacement */}
        <Outlet />
      </Wrapper>
    </section>
  );
};

export default CheckOutPage;
