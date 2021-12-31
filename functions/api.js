const app = require("../js/express.js");

// Netlify Serverless Lamda Function
const serverless = require("serverless-http");
module.exports.handler = serverless(app);
