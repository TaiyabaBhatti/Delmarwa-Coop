import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ConfirmedOrderDetails = ({ orderDetails }) => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="bg-gray-100 p-7 rounded-lg">
      <h4>Order Details</h4>
      <hr className="my-2.5 text-athens-gray" />
      <div className="space-y-3.5">
        <div className="">
          <h6 className="text-sm uppercase text-scarpa-flow">
            Contact Information
          </h6>
          <div className="text-black">
            <p>{currUser?.email}</p>
            <p>{orderDetails.phone}</p>
          </div>
        </div>
        <div className="">
          <h6 className="text-sm uppercase text-scarpa-flow">
            Shipping Address
          </h6>
          <div className="text-black">
            <p>
              {orderDetails.firstName} {orderDetails.lastName}
            </p>
            <p>
              {orderDetails.street}, {orderDetails.city} {orderDetails.state}{" "}
              {orderDetails.postalCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedOrderDetails;
