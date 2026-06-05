import React from "react";

const ButtonSubmit = ({
  value,
  loading = null,
  func = null,
  properties = "",
}) => {
  return (
    <button
      onClick={func}
      type="submit"
      disabled={loading}
      value={value}
      className={`w-full text-white bg-tall-poppy py-4 px-9 font-bold tracking-widest rounded-sm cursor-pointer transition-all duration-200
    hover:brightness-110
    hover:shadow-lg
    active:scale-95
    disabled:opacity-60
    disabled:cursor-not-allowed ${properties}`}
    >
      {loading ? "Processing..." : value}
    </button>
  );
};

export default ButtonSubmit;
