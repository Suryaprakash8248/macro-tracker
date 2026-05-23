import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDb from "./config/db.js";
import router from "./routers/router.js";
import path from "path";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use("/api/macros/", router);
app.use(express.static(path.join(__dirname, "../frontend/vite-project/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vite-project/dist/index.html"));
});




connectDb().then(()=>{
  app.listen(port, () => {
  console.log('server is listening at port ', port);
  })
});

// {
//     "foodname":"eggs",
//     "quantity":70,
//     "calorie":70,
//     "protein":6,
//     "carbs":10,
//     "fat":5
// }