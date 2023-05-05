const fmock = require("./lib.js");

const process = require("process");
const mockProcess = fmock.require("process");

console.log(process.platform);
console.log(mockProcess.platform);
