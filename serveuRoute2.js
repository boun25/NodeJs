var express = require("express");
var app = express();

app.get("/", function (req, res) {
res.sendFile(__dirname + "/page.html");
});

app.listen(4004);
console.log("Serveur en marche");