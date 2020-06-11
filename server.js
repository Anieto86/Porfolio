//Dependecies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


//For use handlebar templated engine //  expbs()) this invoque handlebars
app.engine("handlebars", exphbs({defalutLayout:"main", 
layoutsDir: path.join(__dirname, 'views/mainLayouts') // here I can change the name of layouts file for another name, in this case is the same same 
})); // con esto lo que hacemos es decir a main.handeblar que sea el templado por default // ademas es importante tener la carpeta layouts y adentro main handelbars. 
app.set("view engine" , "handlebars"); // set view engine to se or look for any file studies


// Routing for render 

app.get("/" , (req,res) =>{
res.render("home", {
    title:"Home Page" , 
    name:"Alvaro Nieto"});
});

app.get("/contact", (req, res) => {
    res.render("contact", {title:"Contact"})
}); 



app.get("/porfolio", (req, res) => {
    res.render("porfolio"); 
});



// Server configuration
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  