import express from "express";
import "dotenv/config";
import db from "./db.config/db.config.js";
import auth from "./route/router.js";
import verifys from "./middleware/verify.js";
const app = express();
app.use(express.json());
app.use("/api", auth);

app.get("/api/log", verifys, (req, res) => {
  res.send("success");
});

app.listen(process.env.PORT, async () => {
  await db();
  console.log("listening");
});
