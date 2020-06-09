//Dependecies
const express = require('express');
const exphbs = require('express-handlebars');


// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


//For use handlebar templated engine //  expbs()) this invoque handlebars
app.engine("handlebars", exphbs({defalutLayout:"main"}));
app.set("view engine" , "handlebars"); // set view engine to se or look for any file studies


// Routing for render 
app.get('/', (req, res) => {
    res.render("main"); // here we point the main.handlebars is not necesary put ".handlebars"
});


// Server configuration
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  