const express = require("express");
const app = require("./express.js");

const path = require("path");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("dist"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(path.resolve("./") + "/dist/index.html");
});

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const open = require("open");
open("http://localhost:3000");
