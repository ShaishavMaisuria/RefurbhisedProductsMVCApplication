// Require modules import here
const express = require('express');
const morgan = require("morgan");

// create app
const app = express();
const methodOverride = require('method-override');
const res = require('express/lib/response');


// configure app
let port =8080;
let host = 'localhost';
app.set('view engine', 'ejs');

// mount middleware functions
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));


// set up routes
app.get("/",(req,res)=>{
    res.render('index');
});


// start the server

app.listen(port,host,()=> {
    console.log('Server is running on the port',port);
});

