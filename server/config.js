const path = require("path");
const extend = require("util")._extend;

const dev = {
  API: {
    sopapp: {
      host: "https://dev-sop.test.com/"
    }
  }
};

const test = {
  API: {
    sopapp: {
      host: "https://dev-sop.test.com/"
    }
  }
};

const pre = {
  API: {
    sopapp: {
      host: "https://uat-sop.test.com/"
    }
  }
};

const prd = {
  API: {
    sopapp: {
      host: "https://ali-sop.test.com/"
    }
  }
};

var defaults = {
  root: path.normalize(__dirname + "/..")
};

module.exports = {
  dev: extend(dev, defaults),
  test: extend(test, defaults),
  pre: extend(pre, defaults),
  prd: extend(prd, defaults)
}[process.env.DEPLOY_ENV || "dev"];
