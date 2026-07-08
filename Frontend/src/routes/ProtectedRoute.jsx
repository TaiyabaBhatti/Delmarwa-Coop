import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/StatesShowing.jsx/Loading";
const ProtectedRoute = ({ children }) => {
  const { currUser, authLoading } = useContext(AuthContext);
  const location = useLocation();

  if (authLoading) {
    return <Loading text={"Checking User..."} />;
  }
  if (!currUser) {
    return <Navigate to={"/account"} state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
