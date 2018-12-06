const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");
const config = require("./webpack.dev.config");

const app = express();
const compiler = webpack(config);

require("../server/express")(app);

app.use(
  webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  })
);
app.use(webpackHotMiddleware(compiler));

require("../server/server")(app);
require("../server/error")(app);
require("../bin/www")(app);

// force page reload when html-webpack-plugin template changes
compiler.plugin("compilation", function(compilation) {
  compilation.plugin("html-webpack-plugin-after-emit", function(data, cb) {
    webpackHotMiddleware.publish({ action: "reload" });
    cb();
  });
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });
