const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => path.join(__dirname, "..", dir);

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const vueLoaderConfig = {
  transformToRequire: {
    video: ["src", "poster"],
    source: "src",
    img: "src",
    image: "xlink:href"
  }
};

module.exports = {
  entry: {
    app: resolve("app.js")
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
        exclude: /node_modules/
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
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "../static"),
    //     to: config.dev.assetsSubDirectory,
    //     ignore: [".*"]
    //   }
    // ])
  ],
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
  },
  mode: "development"
};
