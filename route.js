// dependencies
// =============================================================
var router = require("express").Router();
var fs = require("fs");
var path = require("path");
var db = [];


// routes
// =============================================================
routes.get("/", function(req, res){
  res.sendFile(path.join(__dirname, ".../public/index.html"));
});

routes.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

routes.get("/db.json", function(req, res){
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

module.exports = router;