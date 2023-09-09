import express from "express";
import cors from "cors"
import "dotenv/config";
import { doramas } from "./models/doramas.js";
import { doramasRouter } from "./routes/doramas.js";

const app = express();
app.use(express.json());
app.use(cors());

//
app.use("/doramas", doramasRouter);

app.get("/doramas", (req, res) => {
  res.json(doramas);
});


//
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});
const port = process.env.PORT || 3000;

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
