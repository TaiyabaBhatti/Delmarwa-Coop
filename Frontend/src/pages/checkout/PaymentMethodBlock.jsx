import React from "react";
import PayPalLogo from "../../assets/logos/paypal-logo.png";
import StripeLogo from "../../assets/logos/stripe-logo.png";
import VisaLogo from "../../assets/logos/visa-logo.png";

const PaymentMethodBlock = ({ setPaymentMethod, paymentMethod }) => {
  const paymentMethodsData = [
    { name: "visa", logo: VisaLogo },
    { name: "paypal", logo: PayPalLogo },
    { name: "stripe", logo: StripeLogo },
  ];

  return (
    <div className="flex items-center gap-x-1.5">
      {paymentMethodsData.map((method, index) => {
        return (
          <button
            key={index}
            onClick={() => setPaymentMethod(method.name)}
            className={`border-gray-200 border rounded-2xl px-3 py-2 cursor-pointer ${
              paymentMethod === method.name
                ? "border-blue-zodiac bg-blue-zodiac/10"
                : "border-gray-200"
            }`}
          >
            <img
              src={method.logo}
              alt={method.name}
              className="w-12 h-5 object-cover"
            />
          </button>
        );
      })}
    </div>
  );
};

export default PaymentMethodBlock;
