import React from "react";

const InputField = ({
  labelFor,
  message,
  type,
  register,
  errors,
  placeholder = "",
  labelText,
  value,
  validation,
}) => {
  return (
    <>
      <div className="space-y-1">
        <label className="block font-bold uppercase text-xs tracking-wide text-scarpa-flow">
          {labelText}
        </label>
        <div className="border-haze-green/15 transition-all duration-200 focus-within:scale-105 focus-within:bg-blue-zodiac/5 rounded-sm bg-athens-gray/25 p-1.5 xs:p-2.5 border border-athens-gray">
          <input
            type={type}
            label={labelFor}
            placeholder={placeholder}
            className="border-none outline-0 w-full text-xs text-scarpa-flow tracking-wide"
            {...register(labelFor, validation)}
          />
        </div>
      </div>
    </>
  );
};

export default InputField;
