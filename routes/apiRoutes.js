// dependencies
// =============================================================
var app = require("express");
var fs = require("fs");
var db =[];
var path = require("path");

// routes
// =============================================================
module.exports = function(app) {

app.get("/api/notes", function(req, res){
res.sendFile(path.join(__dirname, "/db/db.json"));
});


app.post("/api/notes", function(req, res){
var reqBody = req.body;
var notes = fs.readFileSync("./db/db.json");
})

};
