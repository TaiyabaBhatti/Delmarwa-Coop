import React from "react";

const InputField = ({
  labelFor,
  message,
  type,
  register,
  errors,
  placeholder,
  value,
  validation,
}) => {
  return (
    <>
      <div className="border-b-2 border-b-gray-200 pb-1">
        <input
          type={type}
          label={placeholder}
          placeholder={placeholder}
          className="border-none outline-0 w-full text-blue-zodiac tracking-wider"
          {...register(labelFor, validation)}
        />
      </div>
    </>
  );
};

export default InputField;
