// var browserify = require('browserify-middleware')
var db = require('../database/config.js'),
    express = require('express');

var app = express();


//route to your index.html
app.use(express.static('../client/index.html'));

//route to your index.html -- ALREADY CONFIGURED IN MIDDLEWARE
// app.use(express.static('client/'));


//browersify which injects all dependencies into index.html
// var shared = ['angular'];
// app.get('/js/vendor-bundle.js', browserify(shared));
// app.get('/js/app-bundle.js', browserify('../client/app.js', { external: shared }));


// configure our server with all the middleware and routing
require('./db_interface(middleware).js')(app, express);

var port = process.env.PORT || 4000;

app.listen(port);
console.log("Listening on port", port);

