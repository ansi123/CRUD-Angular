require('./models/db');


const express = require("express");
const bodyparser= require("body-parser");
const path =require("path");
const exphbs = require('express-handlebars');
const _handlebars = require('handlebars');

var employeeControllers = require("./controllers/employeeControllers.js");
var app= express();

// app.use(bodyparser.urlencoded({
//   extended: true
// }));
app.use(express.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout: 'mainLayout',layoutsDir:__dirname+'/views/layouts/'}));

app.set('view engine','hbs');
app.listen(3002, () => {
    console.log("server started at port : 3002");
});


app.use('/employee',employeeControllers);