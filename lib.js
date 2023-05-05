const fs = require("fs");

const fmock = {
  require: function (module) {
    // Check if the module exists in the mocks directory
    if (fs.existsSync(`./mocks/${module}.js`)) {
      return require(`./mocks/${module}.js`);
    } else {
      return require(module);
    }
  },
};

module.exports = fmock;
