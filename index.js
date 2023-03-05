import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongo_Connection from "./database/db.js";
import Router from "./routes/route.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api/v1", Router);
const PORT = 5000 || process.env.PORT_NO;

app.listen(PORT, () => {
  console.log(`server is running on port no: ${PORT}`);
});

mongo_Connection();
