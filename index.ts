import express from "express";
export * from "./helper";
export * from "./main";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("setvetr is uop");
});