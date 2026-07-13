import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import InputErrors from "../InputErrors";

const ArrayInputField = ({
  fieldsData,
  register,
  onClickRemove,
  onClickAdd,
  labelFor,
  errors,
}) => {
  return (
    <div className={`${fieldsData ? "space-y-3" : ""} w-full`}>
      {fieldsData.map((field, index) => (
        <div key={field.id} className="flex gap-2 w-full">
          <div className="w-full">
            <input
              {...register(`${labelFor}.${index}.value`, {
                required: `${labelFor} is required`,
              })}
              placeholder={`${labelFor} ${index + 1}`}
              className="border p-2 flex-1 w-full border-blue-zodiac/40 text-blue-zodiac  tracking-wider bg-blue-100 rounded-lg outline-none "
            />

            <p className="text-red-500 text-end text-xs mb-4">
              {errors?.[labelFor]?.[index]?.value.message}
            </p>
          </div>

          <div>
            <button
              className=" p-1.5"
              type="button"
              onClick={() => onClickRemove(index)}
            >
              <FaDeleteLeft className="text-red-700 text-2xl cursor-pointer" />
            </button>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-x-2">
        {" "}
        <button
          className="bg-gray-400  rounded-xs cursor-pointer p-1 font-bold"
          type="button"
          onClick={() => onClickAdd({ value: "" })}
        >
          <IoAddCircleSharp />
        </button>
        <span className="text-blue-zodiac/60 font-bold tracking-wider">
          Add {labelFor}
        </span>
      </div>
    </div>
  );
};

export default ArrayInputField;
