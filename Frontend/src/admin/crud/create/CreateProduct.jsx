import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../../components/StatesShowing.jsx/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleProduct,
  uploadProduct,
  updateProduct,
} from "../../../api/productApi.js";

import ProductPanelActions from "../ProductPanelActions.jsx";
import StateMessage from "../../../components/StatesShowing.jsx/StateMessage.jsx";
import { getErrorMessage } from "../../../utils/getErrorMessage.js";
import CreateProductInputBlock from "./CreateProductInputBlock.jsx";
import CreateProductArrayFieldBlock from "./CreateProductArrayFieldBlock.jsx";

const CreateProduct = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      keyFeatures: [{ value: "" }],
      imageUrls: [{ value: "" }],
    },
  });

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const fomrStatus = productId ? "Update Product" : "Add Product";
  useEffect(() => {
    const fetchSingleProductData = async () => {
      try {
        const res = await getSingleProduct(productId);
        const data = res.data.data;

        reset({
          name: data.name,
          price: data.price,
          image: data.image,
        });
        setProduct(data);
      } catch (error) {}
    };

    if (productId) {
      fetchSingleProductData();
    }
  }, []);
  const createProduct = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await uploadProduct(data);
      setShowForm(false);

      // reset();
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
      setShowForm(true);
    } finally {
      setLoading(false);
      setErrorMessage("");
    }
  };
  const editProduct = async (data) => {
    setLoading(true);
    try {
      const response = await updateProduct(productId, data);
      console.log("Updated Successfully");
      reset();
      navigate("/");
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="">
      {/* display products header*/}
      <div className=" text-center gap-x-1.5 justify-center">
        <h1 className="text-gray-600 text-3xl font-extrabold">
          {productId ? "Upadte Product" : "Create New Product"}
        </h1>
        {errorMessage && <StateMessage text={errorMessage} />}
      </div>
      {showForm ? (
        <div className={`relative mt-10 rounded-md p-5 max-w-2xl mx-auto`}>
          <form
            onSubmit={handleSubmit(productId ? editProduct : createProduct)}
            className={`space-y-10 text-white`}
          >
            <fieldset disabled={loading} className="space-y-10">
              <CreateProductInputBlock
                register={register}
                errors={errors}
                product={product}
              />
              <CreateProductArrayFieldBlock
                register={register}
                control={control}
                errors={errors}
              />
              <input
                type="submit"
                value={productId ? "Update Product" : "Add Product"}
                className={`tracking-wider w-fit  ${
                  productId ? "bg-green-400" : "bg-blue-400"
                } px-4 py-2 rounded-xs cursor-pointer mt-10`}
              />
            </fieldset>
          </form>

          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-md">
              <Loading
                text={productId ? "Updating" : "Creating"}
                properties={"text-3xl"}
              />
            </div>
          )}
        </div>
      ) : (
        <ProductPanelActions setShowForm={setShowForm} />
      )}
    </section>
  );
};

export default CreateProduct;
