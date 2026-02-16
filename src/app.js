import express from "express";
import cors from "cors";

import helthCheck from "./routes/healthcheck.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/v1/healthcheck", helthCheck);


export default app;
