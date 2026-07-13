import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useFieldArray } from "react-hook-form";
import { IoAddCircleSharp } from "react-icons/io5";
import ArrayInputField from "./ArrayInputField";

const CreateProductArrayFieldBlock = ({ register, control, errors }) => {
  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "keyFeatures",
  });
  const {
    fields: imageUrlFields,
    append: appendImageUrl,
    remove: removeImageUrl,
  } = useFieldArray({
    control,
    name: "imageUrls",
  });
  return (
    <div className="space-y-4 mb-5">
      {/* add features */}

      <ArrayInputField
        fieldsData={featureFields}
        labelFor="keyFeatures"
        register={register}
        onClickRemove={removeFeature}
        onClickAdd={appendFeature}
        errors={errors}
      />

      {/* add image urls */}
      <ArrayInputField
        labelFor="imageUrls"
        fieldsData={imageUrlFields}
        register={register}
        onClickRemove={removeImageUrl}
        onClickAdd={appendImageUrl}
        errors={errors}
      />
    </div>
  );
};

export default CreateProductArrayFieldBlock;
