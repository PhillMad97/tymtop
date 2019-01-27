var http = require("http");
var server = http.createServer(function(req, res) {
  res.writeHead(200,{'Content-type':'text/html'});
  res.end("<h1>Hello World</h1>");

});

server.listen(3000);
