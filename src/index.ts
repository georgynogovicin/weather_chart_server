import { sum } from "$utils";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(sum(1, 2));

  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
