// Require modules import here
const express = require('express');
const morgan = require("morgan");
const tradeRoutes = require('./routes/tradeRoutes');
const mainRoutes = require('./routes/mainRoutes');
// create app
const app = express();
const methodOverride = require('method-override');
const res = require('express/lib/response');


// configure app
let port =3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// mount middleware functions
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use('/index',tradeRoutes);

// set up routes
app.use("/",mainRoutes);




app.use((req,res,next)=>{

    let err = new Error('The server cannot locate'+req.url);
    err.status=404;
    next(err);
});
app.use((err,req,res,next)=>{
    console.log(err.stack);
    if(!err.status){
        err.status=500;
        err.message=("Internal Server Error");

    }

    res.status(err.status);
    res.render('error',{error:err});
});

// start the server

app.listen(port,host,()=> {
    console.log('Server is running on the port',port);
});


