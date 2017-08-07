// Node dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initializes Express application.
var app = express();

// Establishes the inital port
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});