import express from "express";
import "dotenv/config";
import { doramas } from "./models/doramas.js";

const app = express();

app.use(express.json());

app.get("/doramas", (req, res) => {
  res.json(doramas);
  
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});
const port = process.env.PORT || 3000;

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
