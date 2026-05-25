import React from "react";
import { FaCheck } from "react-icons/fa6";

const StockBlock = ({ stock }) => {
  return (
    <div className="bg-white px-3 py-2 font-semibold text-green-gaze text-sm flex flex-row items-center gap-x-2 w-fit rounded-sm">
      
      {stock > 0 ? (
        <>
        <FaCheck />
         <span>In Stock & Ready to Ship</span>
        </>
       
      ) : (
        <span className="text-tall-poppy">In Stock & Ready to Ship</span>
      )}
    </div>
  );
};

export default StockBlock;
