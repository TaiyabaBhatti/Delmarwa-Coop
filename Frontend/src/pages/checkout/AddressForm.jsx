import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../account/InputField";
import InputErrors from "../account/InputErrors";
import ButtonEffect from "../account/ButtonEffect";
import ButtonSubmit from "../account/ButtonSubmit";
import ButtonIconStyle from "../../components/navElements/ButtonIconStyle";
import { FaArrowLeft } from "react-icons/fa";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";
import { createOrder } from "../../api/orderApi";
import { CartContext } from "../../context/cartContext";
import { getErrorMessage } from "../../utils/getErrorMessage";
import StateMessage from "../../components/StatesShowing.jsx/StateMessage";

const AddressForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { cartItems, setCartItems } = useContext(CartContext);
  const { currUser, setCurrUser, loginStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const formAddressAndCreateOrder = async (data) => {
    try {
      setLoading(true);
      const payload = {
        address: data,
        cartItems: cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };
      const response = await createOrder(payload);
      console.log(response.data.data);
      const orderId = response.data.data.orderId;
      navigate(
        APP_ROUTES_NAME.orderCreationSuccessPage.replace(":orderId", orderId)
      );
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const address = currUser?.shippingAddresses?.[0];
    if (address) {
      reset(address);
    }
  }, [currUser, reset]);

  return (
    <section>
      <div className="flex-1 space-y-9 rounded-lg bg-white border border-athens-gray p-9 max-w-2xl">
        {/* display header*/}

        <h1 className="text-blue-zodiac capitalize  text-3xl font-bold">
          Address Form
        </h1>
        {errorMessage && (
          <StateMessage text={errorMessage} properties={"text-tall-poppy "} />
        )}
        <div className="relative space-y-4">
          <form
            onSubmit={handleSubmit(formAddressAndCreateOrder)}
            className="space-y-5"
          >
            <div className="flex items-center gap-x-2.5">
              <div className="w-full!">
                <InputField
                  labelText={"First Name"}
                  labelFor={"firstName"}
                  message={"FirstName is required"}
                  type={"text"}
                  placeholder={"John"}
                  register={register}
                  errors={errors}
                />
                <InputErrors labelFor={"firstName"} errors={errors} />
              </div>
              <div className="w-full!">
                <InputField
                  labelText={"Last Name"}
                  labelFor={"lastName"}
                  message={"LastName is required"}
                  type={"text"}
                  placeholder={"Den"}
                  register={register}
                  errors={errors}
                />
                <InputErrors labelFor={"lastName"} errors={errors} />
              </div>
            </div>
            <div>
              <InputField
                labelText={"Street"}
                labelFor={"street"}
                message={"Street Address is required"}
                type={"text"}
                placeholder={"123 farm house land"}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"street"} errors={errors} />
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="w-full!">
                <InputField
                  labelText={"City"}
                  labelFor={"city"}
                  message={"city is required"}
                  type={"text"}
                  placeholder={"karachi"}
                  register={register}
                  errors={errors}
                />
                <InputErrors labelFor={"city"} errors={errors} />
              </div>
              <div className="w-full!">
                <InputField
                  labelText={"State"}
                  labelFor={"state"}
                  message={"State is required"}
                  type={"text"}
                  placeholder={"Pakistan"}
                  register={register}
                  errors={errors}
                />
                <InputErrors labelFor={"state"} errors={errors} />
              </div>
              <div className="w-full!">
                <InputField
                  labelText={"Postal Code"}
                  labelFor={"postalCode"}
                  message={"Postal code is required"}
                  type={"text"}
                  placeholder={"12346"}
                  register={register}
                  errors={errors}
                />
                <InputErrors labelFor={"postalCode"} errors={errors} />
              </div>
            </div>
            <div>
              <InputField
                labelText={"Phone"}
                labelFor={"phone"}
                message={"Phone is required"}
                type={"text"}
                placeholder={"+92 "}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"phone"} errors={errors} />
            </div>
            <div className="grid grid-cols-2">
              <ButtonIconStyle>
                <NavLink
                  to={APP_ROUTES_NAME.cartPage}
                  className="text-sm font-bold text-blue-zodiac uppercase flex items-center gap-x-1"
                >
                  <FaArrowLeft />
                  <span>Return to Cart</span>
                </NavLink>
              </ButtonIconStyle>
              <ButtonSubmit value={"Order Confirmed"} loading={loading} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
