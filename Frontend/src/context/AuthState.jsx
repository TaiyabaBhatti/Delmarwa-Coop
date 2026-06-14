import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi.js";

const AuthState = ({ children }) => {
  // data i want globally
  const [currUser, setCurrUser] = useState(null);
  const [globalMessage, setGlobalMessage] = useState("");
  const [authLoading, setauthLoading] = useState(true);

  // derived states
  const loginStatus = !!currUser;
  const fullname = currUser?.fullname;

  useEffect(() => {
    const checkJwtToken = async () => {
      try {
        const res = await verifyToken();
        setCurrUser(res.data.data);
        console.log(res.data.data);
        setauthLoading(false);
      } catch (error) {
        // NotificationPopup(error,"error")
        if (error.response?.status === 401) {
          //This is Expected no need to console ->  console.log(`Expected Error: ${error.response.statusText} || ${error.message}`)
          setCurrUser(null);
          return; // expected situation
        }
        console.log(error);
      } finally {
        setauthLoading(false);
      }
    };

    checkJwtToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currUser,
        globalMessage,
        authLoading,
        setGlobalMessage,
        setCurrUser,
        fullname,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
