const { EventEmitter } = require("events");
const { createServer } = require("http");

const welcome = new EventEmitter();

welcome.on("signup", function(person, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.write(person.name + ", welcome");
  res.end();

});

createServer(function(req, res) {
    const { url, method} = req;

    req.on("data", function(chunk) {
      chunks.push(chunk)
    }).on('end', function() {
      let body = JSON.parse(Buffer.concat(chunks).toString())
      if (url == "/party" && method == "POST") {
        welcome.emit("enter", body, res)
      } else {
        res.emit("404", { url, method})
      }
    })

    function handle404() {
      res.writeHead(404, {"Content-Type": "application"})
      res.write(JSON.stringify({ mesg: "Incorrect Route", route.url, method}));
      res.end();
    }

}).listen(3001, function() {
  console.log("Server Listening");
})

