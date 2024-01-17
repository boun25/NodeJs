//une applivation avec deux pages .la page d'acceil contient un lien vers la seconde page 
var express = require("express");
var app = express();
//premier route
app.get("/", function (req, res) {
//La page contient un titre et un lien hypertexte relatif verds la secondepage
res.send ("<h1>Bienvenue ! </h1><br><a href='/a'>Page A </a>");
res.end();
});
//La seconde route, accessible à l'adresse http://localhost:4003/a app.get("/a",
app.get("a", function (req, res) {
res.send("<h1>Page A</h1>");
res.end();
});
//Gestion des erreurs 404
 app.use(function (req, res) {
res.status(404).send("404: la page n'existe pas");
});
app.listen (4003);
console.log("Serveur en marche");