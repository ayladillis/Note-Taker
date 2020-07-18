// dependencies
// =============================================================
var app = require("express");
var fs = require("fs");
var db =[];
var path = require("path");

// routes
// =============================================================
module.exports = function(app) {

  app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
  };