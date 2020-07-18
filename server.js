// dependencies
// =============================================================
var express = require("express");
var app = express();
// var routes = require("./routes/route");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static("public"))
// app.listen.apply.use(routes);

// listening function 
// ================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });