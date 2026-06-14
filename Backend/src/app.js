import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
const app = express();
console.log(process.env.CORS_ORIGIN);
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Router paths

import userRoute from "./routes/user.routes.js";
import productRoute from "./routes/product.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import orderRoute from "./routes/order.routes.js";

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.use(errorMiddleware);
export default app;
