import express, { json } from "express";
import { config } from "dotenv";
import requestsRouter from "./routes/requests";

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// API Routes
app.use("/api", requestsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
