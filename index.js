var http = require('http');

/*
* Création du serveur
*/
var app = http.createServer(function(req,res){
    res.write("Bonjour!!!");
    res.end();
});

//Le serveur écoute sur le port 10031
app.listen(10031);
