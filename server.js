// // create a server
// const http = require('http');


// const server = http.createServer((req, res) => {
//     // related to server request
//     if(req.url == "/home") {
//         res.statusCode = 200;
//         res.write("welcome from home");
//     } else if(req.url == "/contact") {
//         res.write("welcome from contact");
//     } else if(req.url == "/about") {
//         res.write("welcome from about dude");
//     } else {
//         res.write("test test");
//     }

//     // related to server response
//     // res.statusCode = 200;
//     // res.setHeader("content-type", "text/html")
//     // res.write("welcome Meiez\n");

//     res.end("\ndone");
//     // you can do multiple writes but once an end
// });

// server.listen(5000, () => {console.log("server is running")});















// express is based on middlewares
const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const bodyParserr = bodyParser.urlencoded({extended : true})

// middlewares
// app.use((req, res, next) => {
//     console.log("welcome from home");
//     next();
// }, (req, res) => {
//     console.log("welcome from about");
// })


// all (get - post - put - patch - delete) : http request methods

// app.get("/", (req, res, next) => {
//     // res.send("<h1>welcome from home</h1>") // substitutes res.write and res.end
//     // res.redirect("/about")


//     res.send("<form action = '/form' method = 'post'><input type = 'text' name = 'firstname'/><br><input type = 'text' name = 'lastname'/><br><button type = 'submit'>Send</button></form>")

// })


// middleware of post
// app.post("/form", bodyParserr, (req, res, next) => {
//     res.send(req.body.firstname + " " + req.body.lastname) // body is an object inside the req object
//     res.end();
// })

app.get("/about/:name/:formation/:prix", (req, res, next) => {
    res.send("you're requesting " + req.params.name + " ,this training is under the name of " + req.params.formation + " , and its price is : " + req.params.prix) // substitutes res.write and res.end
})

// app.get("/contact", (req, res, next) => {
//     res.send("<h1>welcome from contact</h1>") // substitutes res.write and res.end
// })
// the best practice is to use each request for its use instead of writing all


app.listen(5000, () => {console.log("server is running from port 5000")});
