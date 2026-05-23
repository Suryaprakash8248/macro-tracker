import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDb from "./config/db.js";
import router from "./routers/router.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/macros/", router);





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