var express = require("express");
var bodyParser = require("body-parser");

var multer = require("multer");
var app = express();
 app.use(bodyParser.urlencoded({
extended: true

}));
var upload = multer({dest: 'upload/'});

app.get("/", function(req,res) {
 res.sendFile(__dirname + "/formulaireFichier.html");
});

app.post("/upload", upload.single("monFichier"), 
function (req, res) {
     res.send(req.file);
    res.end();
    });
    app.listen (3382);
    console.log("Serveur en cours de fonctionnement....");