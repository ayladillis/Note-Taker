// dependencies
// =============================================================
var express = require("express").Router();
var fs = require("fs");
var db = [];
var path = require("path");

// express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  