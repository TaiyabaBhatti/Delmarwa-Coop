import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ReturnBack = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-sm font-bold text-blue-zodiac uppercase flex items-center gap-x-1 cursor-pointer transition-transform duration-150
    hover:brightness-110 hover:scale-105 rounded-2xl border-[1.5px] border-blue-zodiac/15 px-2 py-1 bg-blue-zodiac/20"
    >
      <FaArrowLeft />
      <span>Return to {text}</span>
    </button>
  );
};

export default ReturnBack;
