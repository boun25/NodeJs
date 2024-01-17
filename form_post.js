var express = require("express"); 
var bodyParser = require("body-parser");

var app = express();
//Configuration d'Express pour qu'il fonctionne avec Express app.use(
app.use(
bodyParser.urlencoded({
extended: true,
})

);
app.get("/", function (req, res) {
res.sendFile(__dirname + "/formulairePost.html");

});
//Il faut configurer une route avec la méthode post() pour recevoir ces requêtes
 app.post("/recherche", function (req, res) {
res.send("Reçu POST: " + req.body.nom);
 });
app.listen (3305);