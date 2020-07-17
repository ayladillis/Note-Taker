// dependencies
// =============================================================
var app = require("express");
var fs = require("fs");
var path = require("path");
var db = [];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('')
  })


// routes
// =============================================================

app.get("/api/notes", function(req, res){
  res.sendFile(path.join(__dirname, "/db.json"));
});

app.post("/api/notes", function(req, res){
  res.sendFile(path.join(__dirname, " "));
})

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, ".../public/index.html"));
});

app.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = app;