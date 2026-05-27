import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config.js";
import pingRoute from "./routes/pingRoute.js";
import queryRoute from "./routes/queryRoute.js";
import instagramRoute from "./routes/InstagramRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api", pingRoute);
app.use("/api/query", queryRoute);
app.use("/api/instagram", instagramRoute);

connectDB();

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
