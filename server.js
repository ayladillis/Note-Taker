// dependencies
// =============================================================
var express = require("express");
var fs = require("fs");
var path = require("path");

var db = [];

// express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//sets up the express app to handle data parsing
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// routes
// =============================================================
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "./db.json"));
});