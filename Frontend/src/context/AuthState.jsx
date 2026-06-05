import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi.js";

const AuthState = ({ children }) => {
  // data i want globally
  const [currUser, setCurrUser] = useState(null);
  const [fullname, setFullname] = useState(null);

  const [globalMessage, setGlobalMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const checkJwtToken = async () => {
      try {
        const res = await verifyToken();
        setCurrUser(res.data.data);
        setFullname(res.data.data.fullname);

        setLoginStatus(true);
        setLoading(false);
      } catch (error) {
        // NotificationPopup(error,"error")
        if (error.response?.status === 401) {
          //This is Expected no need to console ->  console.log(`Expected Error: ${error.response.statusText} || ${error.message}`)
        } else {
          // console.log(`UnExpected Error: ${error}`);
        }
        setCurrUser(null);
        setLoginStatus(false);
      } finally {
        setLoading(false);
      }
    };

    checkJwtToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currUser,
        globalMessage,
        loading,
        setGlobalMessage,
        setCurrUser,
        fullname,
        setLoginStatus,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
