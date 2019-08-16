// let http = require ('http');

// http.createServer(function(req,res) {

//     if (req.method === "GET") {
//         if (req.url === "/") {
//             //sed back the homepage
//         }else if (req.url === "/about") {
//             //send back the about page
//         }
//     }else if (req.method === "POST") {
//         //handle the post request
//     }
// }).listen(8080);

//watch YouTube clips to learn about GitHub and how it can be used and what are the commands to use in terminal

//express makes it cleaner and simpler to code and maintain
//including the express package
//express is not a local package like http and it is not built in
//have to use npm install, use npm init -y to agree to all default value first
//then use npm install express
let express = require('express');

//create a new instance of the new application
//telling them that you need a new application
//app becomes a new instance of express application
let app = express();

//if a request comes to the below pathname, execute the function below
app.get("/", function (req, res) {
    //the response to reply to the client
    res.send("Hello to my first Express App!!!");
});

//pathname must contain the word "wiki"
//anything after colon is a parameter
//the colon is to tell express that it is a parameter aft the colon
//express create the object and parses the key-value pairs from the URL
app.get("/wiki/:keyword/fit2095/:id", function (req, res) {
    console.log(req.url);
    console.log(req.params);

});

//http://localhost:8080/report?name=Tim&age=24&address=Mel&postcode=3000&weather=cloudy
//this will convert all the things in the query in the url into key-value pairs
app.get("/report", function(req,res){
    console.log(req.url);
    console.log(req.query);

    console.log("the name is ==" + req.query.name);
    console.log("the age is == "+ req.query.age);
});

//if a request comes to the below pathname, execute the function below
app.get("/about", function (req, res) {
    //the response to reply to the client
    res.send("This is the about page!!!");
});

//if a request comes to the below pathname, execute the function below
app.get("/contactUs", function (req, res) {
    //the response to reply to the client
    res.send("This is the Contact Us page!!!");
});

//the app will listen to the port 8080
app.listen(8080);