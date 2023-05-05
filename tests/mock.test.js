const fmock = require("../lib.js");
const mockProcess = fmock.require("process");

if (mockProcess.platform !== "mocked") {
  throw new Error("Mock process.platform should be mocked");
}

console.log("Mock process.platform is mocked");
