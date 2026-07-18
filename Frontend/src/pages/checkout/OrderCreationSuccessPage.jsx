import React, { useContext } from "react";
import Wrapper from "../../components/Wrapper";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOrderById } from "../../api/orderApi";
import ConfirmedOrderDetails from "./ConfirmedOrderDetails";
import { useState } from "react";
import { AuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import { getErrorMessage } from "../../utils/getErrorMessage";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
import Loading from "../../components/StatesShowing.jsx/Loading";

const OrderCreationSuccessPage = () => {
  const { currUser } = useContext(AuthContext);
  const { setCartItems } = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const fetchingOrderDetails = async () => {
      try {
        const response = await getOrderById(orderId);
        setDetails(response.data.data.address);
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
        console.log(error.response?.status);
      } finally {
        setLoading(false);
      }
    };

    fetchingOrderDetails();
  }, [orderId, navigate]);

  return (
    <div className=" rounded-lg bg-white border border-athens-gray p-9 max-w-2xl space-y-6 m-auto">
      {/* error */}
      {errorMessage && (
        <StateMessage text={errorMessage} properties={"text-tall-poppy "} />
      )}
      {/* loading */}
      {loading && <Loading text={"Getting Details..."} />}

      {/* exists */}
      {!loading && !errorMessage && details && (
        <>
          <div className="flex flex-col gap-y-3 items-center">
            {" "}
            <IoMdCheckmarkCircle className="w-20 h-20 text-green-gaze" />
            <h4 className="text-3xl font-bold">Order Confirmed</h4>
            <p className="text-center">
              Thanku for your purchase. your order {orderId} has been received.
            </p>
          </div>
          <ConfirmedOrderDetails orderDetails={details} />
        </>
      )}
    </div>
  );
};

export default OrderCreationSuccessPage;
