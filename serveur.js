var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send ("<html><button>bonjour teste </button></html> ");
    res.end();
});

app.listen(3300);
console.log("serveur en marche");
/*

pour ce connecte c'est:  node "nom du fichie.js"
sur la page c'est : localhost:3300


ce code contient le nécessaire pr créer une application minimaliste avce node.js. la méthode liste () démarre l'application et s'apparente à une boucle infinie  : le serveur va attendre insindefiniment les requetes de client.
Si cette applciation ne fait rien en elle-meme, elle permet néanmoins de poser la structure d'une application Node.js. Cette dernière est un fichier JS ordinaire qui contient des fonctions et des variables. Ici nous nous contentons simplement d'afficher un message sur l'invite de commande, à l'aide de la méthode log() de l'objet console.
Demarrer une application Node.js
* Le démarrae se fait à l'aide de l'interface de commande en utilisant la commande node suivie du nom du fichier qu'il faut exécute
3.2 Envoiyer des données avec un serveur 
3.3 le routage 
la premiére étape de construction d'une application est la création des routes .une routes correspond au chemin qui relie une adresse URL à une ressource , comme une page web ou une image .si cette dérnier par Vous

(le dev expert), le serveur lui répondra.
Node.js comporte plusieurs fonctions qui permettent de créer des réponses. La plus basique est send() qui renvoie au client la chaine de texte qui lui est passée en paramètre.
La création d'une route passe ici par l'appel de la méthode get(). Cette dernière prend deux paramètres. le premier est l'endroit ou arriveront les requetes 

*/