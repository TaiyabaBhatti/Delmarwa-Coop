import React from "react";
import InputErrors from "../InputErrors.jsx";
import InputField from "../InputField.jsx";

const CreateProductInputBlock = ({ register, errors, product }) => {
  return (
    <div className="space-y-5 grid gap-x-5 grid-cols-2">
      <div>
        <InputField
          labelFor={"title"}
          type={"text"}
          placeholder={"Product Name"}
          register={register}
          errors={errors}
          value={product.title}
          validation={{
            required: "Product Title is required",
            pattern: {
              value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
              message: "Only letters are allowed",
            },
            minLength: {
              value: 3,
              message: "Must have atleast 3 charcaters",
            },
          }}
        />
        <InputErrors labelFor={"title"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"brandName"}
          type={"text"}
          placeholder={"Brand"}
          register={register}
          errors={errors}
          value={product.name}
          validation={{
            required: "Product brand is required",
            pattern: {
              value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
              message: "Only letters are allowed",
            },
            minLength: {
              value: 3,
              message: "Must have atleast 3 charcaters",
            },
          }}
        />
        <InputErrors labelFor={"brandName"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"price"}
          type={"text"}
          placeholder={"Product price"}
          register={register}
          errors={errors}
          validation={{
            required: "Price is required",
          }}
        />
        <InputErrors labelFor={"price"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"description"}
          type={"text"}
          placeholder={"Product description"}
          register={register}
          errors={errors}
          validation={{
            required: "Product description is required",
            minLength: {
              value: 3,
              message: "Must have atleast 15 charcaters",
            },
          }}
        />
        <InputErrors labelFor={"description"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"rating"}
          type={"text"}
          placeholder={"Rating"}
          register={register}
          errors={errors}
          validation={{
            required: "Product rating is required",
          }}
        />
        <InputErrors labelFor={"rating"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"numReviews"}
          type={"text"}
          placeholder={"Reviews"}
          register={register}
          errors={errors}
          validation={{
            required: "Product reviews is required",
          }}
        />
        <InputErrors labelFor={"numReviews"} errors={errors} />
      </div>
      <div>
        <InputField
          labelFor={"stockCount"}
          type={"text"}
          placeholder={"Stock count"}
          register={register}
          errors={errors}
          validation={{
            required: "stock count is required",
          }}
        />
        <InputErrors labelFor={"stockCount"} errors={errors} />
      </div>
    </div>
  );
};

export default CreateProductInputBlock;
