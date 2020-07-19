// dependencies
// =============================================================
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
// var routes = require("./routes/route");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// listening function 
// ================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });