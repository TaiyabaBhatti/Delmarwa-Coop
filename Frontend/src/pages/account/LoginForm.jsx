import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import InputErrors from "./InputErrors";
import Loading from "../../components/StatesShowing.jsx/Loading";
import { loginUser } from "../../api/authApi";
import ButtonSubmit from "./ButtonSubmit";
import ButtonEffect from "./ButtonEffect";

const LoginForm = ({ setAccountToggle }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { currUser, setCurrUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errordesc, setErrorDesc] = useState("");
  const formLogin = async (data) => {
    try {
      setLoading(true);
      const response = await loginUser(data);
      //   reset();
      console.log("Login Success");
      setCurrUser(response.data.data);
      navigate("/");
    } catch (error) {
      setErrorDesc(`${error.response.data.message} ${error.status}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex-1 space-y-9 rounded-lg bg-white border border-athens-gray p-9">
      {/* display header*/}

      <h1 className="text-blue-zodiac capitalize  text-3xl font-bold">
        sign in
      </h1>
      {/* {errordesc && <ErrorNotif text={errordesc} />} */}
      <div className="relative space-y-4">
        <form onSubmit={handleSubmit(formLogin)} className="space-y-5">
          <div>
            <InputField
              labelFor={"identifier"}
              labelText={"Email Address or Username"}
              message={"email address or username is required"}
              type={"text"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"identifier"} errors={errors} />
          </div>
          <div>
            <InputField
              labelFor={"password"}
              labelText={"Password"}
              message={"Password is required"}
              type={"password"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"password"} errors={errors} />
          </div>
          <ButtonSubmit value={"Login"} loading={loading} />
        </form>

        <ButtonEffect
          message={"Don't have an Account?"}
          action={"Register Now"}
          status={false}
          setAccountToggle={setAccountToggle}
        />
      </div>
    </div>
  );
};

export default LoginForm;
