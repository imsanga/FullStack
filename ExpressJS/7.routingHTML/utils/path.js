const routingPath = require("path");

// It returns the main filename eg:app.js and gives the file path of it.
const directory = routingPath.dirname(require.main.filename);

module.exports = directory;
