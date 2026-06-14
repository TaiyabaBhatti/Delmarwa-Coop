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
}) => {
  return (
    <>
      <div className="space-y-2">
        <label className="block font-bold uppercase text-xs tracking-wide text-scarpa-flow">
          {labelText}
        </label>
        <div className="rounded-sm bg-athens-gray/25 p-2.5 border border-athens-gray">
          <input
            type={type}
            label={labelFor}
            placeholder={placeholder}
            className="border-none outline-0 w-full text-xs text-scarpa-flow tracking-wide"
            {...register(labelFor, { required: message })}
          />
        </div>
      </div>
    </>
  );
};

export default InputField;
