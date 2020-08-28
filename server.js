// Setting up express
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();
    app.use(express.static('public'));
    app.use(express.urlenconded({ extended: true }));
    app.use(express.json());

// Setting up handlebars
var exphbs = require('express-handlebars');
    app.enging('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

// Importing routes and giving server access to the routes
var routes = require('./controlers/burgerController.js');
    app.use(routes);

// Starting server listen
    app.listen(PORT, function(){
        // Establishing the address where the server will begin
        console.log('Server is listening on: http://localhost:' + PORT);
    })