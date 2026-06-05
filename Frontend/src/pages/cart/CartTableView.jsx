import React from "react";

const CartTableView = () => {
  return (
    <section className="mt-5">
      <table className="w-full border-collapse overflow-hidden">
        <thead className=" bg-white">
          <tr className=" text-sm font-bold text-blue-zodiac text-left">
            <th className="p-3.5">Prduct</th>
            <th className="p-3.5">Price</th>
            <th className="p-3.5">Quantity</th>
            <th className="p-3.5">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="p-3.5 flex items-center gap-3">
              <img
                src="product.jpg"
                alt="product"
                className="w-12 h-12 object-cover rounded"
              />
              <span>Product Name</span>
            </td>

            <td className="p-3.5 font-normal">$100</td>

            {/* quanity adjust buttons */}
            <td className="">
              <div className="flex items-center">
                <button className="px-2 py-1 h-11 w-7 bg-gray-200 cursor-pointer active:scale-105">
                  -
                </button>
                <span className="bg-white h-11 w-10 p-3 text-center border-x border-x-athens-gray">
                  1
                </span>
                <button className="px-2 py-1 h-11 w-7 bg-gray-200 cursor-pointer active:scale-105">
                  +
                </button>
              </div>
            </td>

            <td className="p-3.5 font-bold">$100</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartTableView;
