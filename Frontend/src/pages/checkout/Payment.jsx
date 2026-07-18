import React, { useContext, useState } from "react";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "./InputField";
import InputErrors from "./InputErrors";
import PaymentMethodBlock from "./PaymentMethodBlock";
import Loading from "../../components/StatesShowing.jsx/Loading";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";

const Payment = () => {
  // const { updateReservation } = useContext(BookingContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlePaymentData = (data) => {
    setLoading(true);
    // updateReservation({ paymentData: { ...data, method: paymentMethod } });
    navigate(APP_ROUTES_NAME.checkoutSuccess.replace(":orderId", orderId));
  };

  return (
    <section className="w-full">
      <div className="flex-1 space-y-9 rounded-lg bg-white border border-gray-200 p-9 max-w-2xl m-auto">
        {/* display header*/}

        <h1 className="text-blue-zodiac capitalize  text-3xl font-bold">
          Payment
        </h1>
        {errorMessage && (
          <StateMessage text={errorMessage} properties={"text-red-500 "} />
        )}

        {/* payment method */}
        <PaymentMethodBlock
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        />

        <div className="relative space-y-4">
          <form
            onSubmit={handleSubmit(handlePaymentData)}
            className="space-y-5"
          >
            <div>
              <InputField
                labelText="Card Number"
                labelFor="cardNumber"
                placeholder="1234 5678 9012 3456"
                register={register}
                errors={errors}
                validation={{
                  required: "Card number is required",
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: "Card number must contain 16 digits",
                  },
                }}
              />
              <InputErrors labelFor={"cardNumber"} errors={errors} />
            </div>
            <div>
              <InputField
                labelText="Card Holder Name"
                labelFor="cardHolderName"
                placeholder="John Elif"
                register={register}
                errors={errors}
                validation={{
                  required: "Card Holder Name is required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
                    message: "Only letters are allowed",
                  },
                }}
              />
              <InputErrors labelFor={"cardHolderName"} errors={errors} />
            </div>

            <div>
              <select
                {...register("billingCountry", {
                  required: "Country is required",
                })}
                className="  w-full outline-none text-xs transition-all duration-200 focus-within:scale-105 focus-within:bg-blue-zodiac/5 rounded-sm bg-athens-gray/25 p-1.5 xs:p-2.5 border border-athens-gray"
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
              <InputErrors labelFor={"billingCountry"} errors={errors} />
            </div>

            <button
              type="submit"
              className={`w-full text-blue-700 bg-blue-300 py-4 px-9 font-bold tracking-widest rounded-sm cursor-pointer transition-all duration-200
    hover:brightness-110
    hover:shadow-lg
    active:scale-95
    disabled:opacity-60
    disabled:cursor-not-allowed`}
            >
              Pay Now?
            </button>
          </form>
        </div>
      </div>
      {loading && <Loading text={"Processing Reservation"} />}
    </section>
  );
};

export default Payment;
