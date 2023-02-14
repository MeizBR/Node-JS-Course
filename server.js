// create a server
const http = require('http');


const server = http.createServer((req, res) => {
    // related to server request
    if(req.url == "/home") {
        res.statusCode = 200;
        res.write("welcome from home");
    } else if(req.url == "/contact") {
        res.write("welcome from contact");
    } else if(req.url == "/about") {
        res.write("welcome from about dude");
    } else {
        res.write("test test");
    }

    // related to server response
    // res.statusCode = 200;
    // res.setHeader("content-type", "text/html")
    // res.write("welcome Meiez\n");

    res.end("\ndone");
    // you can do multiple writes but once an end
});

server.listen(5000, () => {console.log("server is running")});