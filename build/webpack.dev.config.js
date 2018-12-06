const webpack = require("webpack");
const path = require("path");

const resolve = dir => path.join(__dirname, "..", dir);

module.exports = {
  entry: {
    app: "../app.js"
  },
  output: {
    path: resolve("dist"),
    filename: "[name].js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      }
    ]
  },
  plugins: [],
  devtool: "cheap-module-eval-source-map",
  devServer: {},
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src")
    }
  },
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
