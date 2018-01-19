//Dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Initialize Express and establish port

var app = express();
var PORT = 3000;

//Initialize JSON parsing using bodyParser


//Require routing for HTML and API routing files

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//Initialie our server

app.listen(process.env.PORT || 3000, function() {

    console.log("Port is open on " + process.env.PORT);

});