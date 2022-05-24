// listing dependencies needed

const express = require("express");
const fs= require("fs");

// Variables for our express application

var PORT = process.env.PORT || 8080
var app = express ();

//Data Parsing

app.use(express.urlencoded({extended:true}));
app.use(expression.json());
app.use("/db",express.static*("./db"));

require(".routing/html-routing")(app);
require(".routing/api-routing")(app);

//server needs to listen to our input

app.list(PORT, function(){
    console.log("APP is listening" + PORT);
});