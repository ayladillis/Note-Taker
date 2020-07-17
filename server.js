// dependencies
// =============================================================
var express = require("express");
var app = express();
var app = require("./routes/route.js");

var PORT = process.env.PORT || 8080;


// listening function 
// ================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });