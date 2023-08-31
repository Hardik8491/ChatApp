import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { Configuration, OpenAIApi } from "openai";
import openAiRoutes from "./Routes/open's.js";
import authRoutes from "./routes/auth.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* OPEN AI CONFIGURATION */
const configuration = new Configuration({
  // organization:"org-7iHSzZX1GaYFjp5e9gKoeNKb",
  apiKey:"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",
});
export const openai = new OpenAIApi(configuration);

/* ROUTES */
app.use("/openai", openAiRoutes);
app.use("/auth", authRoutes);

/* SERVER SETUP */
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});