const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");
const config = require("./webpack.dev.config");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
