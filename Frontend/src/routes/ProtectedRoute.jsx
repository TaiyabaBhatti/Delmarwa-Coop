import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import Loading from "../components/StatesShowing.jsx/Loading";
const ProtectedRoute = ({ children }) => {
  const { currUser, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return <Loading text={"Checking User..."} />;
  }
  if (!currUser) {
    return <Navigate to={"/account"} replace />;
  }

  return children;
};

export default ProtectedRoute;
