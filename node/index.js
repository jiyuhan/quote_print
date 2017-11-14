// content of index.js
const http = require('http');
const port = 1201;
const fs = require('fs')

var server = http.createServer((req, res)=>{

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        console.log(req.url);
        fs.readFile('index.html', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          res.write(data);
          res.end();
        });
    }
    else {
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        console.log(req.url);
        fs.readFile(req.url.replace('/', ''), function (err,data) {
          if (err) {
            return console.log(err);
          }
          //res.write(data);
          res.end(data);
        });
    }
}).listen(port);
