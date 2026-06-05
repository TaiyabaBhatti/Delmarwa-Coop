import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./context/AuthState.jsx";
import CartState from "./context/CartState.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthState>
      <CartState>
        <App />
      </CartState>
    </AuthState>
  </BrowserRouter>
);
