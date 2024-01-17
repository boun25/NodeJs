var express = require("express");
var app = express();

 app.get("/", function (req, res) {
    res.sendFile(__dirname + " /index.html");
 });
    app.get("img/pp1", function (req, res){
      res.sendFile(__dirname + "/img/pp1.jpg");
    
      });

    app.get("img/pp2",function (req, res) { 
    res.sendFile(__dirname + "/img/pp2.jpg");
    
     });
   
    app.listen (4005);
    
  
   
   
    