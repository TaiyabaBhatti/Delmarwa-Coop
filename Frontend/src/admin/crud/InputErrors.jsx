import React from "react";

const InputErrors = ({ errors, labelFor }) => {
  return (
    <>
      {errors[labelFor] && (
        <p className="text-red-500 text-end text-xs mb-4 lowercase">
          {errors[labelFor].message}
        </p>
      )}
    </>
  );
};

export default InputErrors;
