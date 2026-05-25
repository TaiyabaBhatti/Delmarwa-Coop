import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi.js";

const AuthState = ({ children }) => {
  // data i want globally
  const [currUser, setCurrUser] = useState(null);
  const [username, setUsername] = useState(null);

  const [globalMessage, setGlobalMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const checkJwtToken = async () => {
      try {
        const res = await verifyToken();
        setCurrUser(res.data.user);
        console.log(currUser);
        setLoginStatus(true);
        setLoading(false);
      } catch (error) {
        // NotificationPopup(error,"error")
        if (error.response?.status === 401) {
          //This is Expected no need to console ->  console.log(`Expected Error: ${error.response.statusText} || ${error.message}`)
        } else {
          console.log(`UnExpected Error: ${error.message}`);
        }
        setCurrUser(null);
        setLoginStatus(false);
      }
    };

    checkJwtToken();
  }, [loginStatus]);

  return (
    <AuthContext.Provider
      value={{
        currUser,
        globalMessage,
        loading,
        setGlobalMessage,
        setCurrUser,
        setLoginStatus,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
