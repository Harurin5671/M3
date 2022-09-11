var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http.createServer((req, res) => {
    fs.readFile(`${__dirname}/images/${req.url}`,(err, data) => {
        if(err) {
            res.writeHead(400,{"Context-Type":"text/plain"});
            res.end("hubo un error");
        }
        else {
            res.writeHead(200,{"Context-Type":"image/jpg"});
            res.end(data);
        }
    })
}).listen(3000, "127.0.0.1")