import express from "express";
import { add, subtract, multiply, divide } from "./calculator";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`Result: ${add(a, b)}`);
});

app.get("/subtract", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`Result: ${subtract(a, b)}`);
});

app.get("/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`Result: ${multiply(a, b)}`);
});

app.get("/divide", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (b === 0) {
    res.status(400).send("Cannot divide by zero");
  } else {
    res.send(`Result: ${divide(a, b)}`);
  }
});

app.listen(3000, () => {
  console.log("setvetr is uop");
});

export { add, subtract, multiply, divide };