import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import InputErrors from "./InputErrors";
import Loading from "../../components/StatesShowing.jsx/Loading";
import { loginUser, registerUser } from "../../api/authApi";
import ButtonEffect from "./ButtonEffect";
import ButtonSubmit from "./ButtonSubmit";

const RegisterForm = ({ setAccountToggle }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { currUser, setCurrUser, setLoginStatus, loginStatus } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errordesc, setErrorDesc] = useState("");
  const formRegister = async (data) => {
    try {
      setLoading(true);
      const response = await registerUser(data);
    //   reset();
      console.log("Create Success");
      console.log(response)
      setCurrUser(response.data.data);
      setLoginStatus(true);
      navigate("/");
    } catch (error) {
        console.log(error)
    //   setErrorDesc(`${error.response.data.message} ${error.status}`);
    }
    finally{
        setLoading(false)
    }
  };
  return (
    <div className="flex-1 space-y-9 rounded-lg bg-white border border-athens-gray p-9">
      {/* display header*/}

      <h1 className="text-blue-zodiac capitalize  text-3xl font-bold">
        Create Account
      </h1>
      {/* {errordesc && <ErrorNotif text={errordesc} />} */}
      <div className="relative space-y-4">
        <form onSubmit={handleSubmit(formRegister)} className="space-y-5">
          <div>
            <InputField
              labelFor={"username"}
              message={"username is required"}
              type={"text"}
              placeholder={"Username"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"username"} errors={errors} />
          </div>
           <div>
            <InputField
              labelFor={"email"}
              message={"email is required"}
              type={"text"}
              placeholder={"Email"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"email"} errors={errors} />
          </div>
           <div>
            <InputField
              labelFor={"fullname"}
              message={"fullname is required"}
              type={"text"}
              placeholder={"fullname"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"fullname"} errors={errors} />
          </div>
          <div>
            <InputField
              labelFor={"password"}
              message={"Password is required"}
              type={"password"}
              placeholder={"Password"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"password"} errors={errors} />
          </div>
          <ButtonSubmit value={"Register"} loading={loading}/>
        </form>
        <ButtonEffect
          message={"Already have an Account?"}
          action={"Login Now"}
          status={true}
          setAccountToggle={setAccountToggle}
        />
      
      </div>
    </div>
  );
};

export default RegisterForm;
