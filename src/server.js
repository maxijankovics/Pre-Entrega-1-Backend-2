import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { authRouter } from "./routes/auth.routes.js";
import { initializePassport } from "./config/passport.config.js";

const app = express();
const PORT = 8080;

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Mongoose
mongoose
    .connect("mongodb://localhost:27017/auth")
    .then(() => console.log("MongoDB conectado"))
    .catch((error) => console.error(error));

// Passport
initializePassport();
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRouter);

// Listen
app.listen(PORT, () => console.log(`Servidor alojado en el puerto ${PORT}`));