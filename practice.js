// Create a server that listens on port 2000 and sends back "Working" for any request to it.
// and parses a request body  if the request method is"POST"
// and updates the contacts.csv file with info from the "REQUEST" body that we parsed

const http = require("http");
const port = 2000;
const routed = ("./routes");
const fe = require("fs");
http.createServer(requestHandler).listen(port, () => console.log("Server live..."));

function requestHandler(req, res) {
  const { url, method } = req;
  const chunks = [];

  res.on("error", (err) => {
    res.writeHead(500, {"Content-Type": "application/json"});
    res.write(JSON.stringify({name: err.name, msg: err.message}));
    res.end();
  })

  res.on("data", (chunk) => {
    chunks.push(chunk);
  }).on("end",  () => {
    let body = Buffer.concat(chunks).toString();
    if(method == "POST" && url == "/contact") {
      let { name, email} = JSON.parse(body);
        fs.appendFile("contacts.csv", `\n${name}, ${email}`, (err) => {
          if(err) {
            res.emit("error", err);
            return
          } else if (method === "GET"){
            fs.readFile(`./pages/${routes[url] ? routes[url] : "404.html"}`, (error, data) => {
          if(error) {
            res.emit("error", error);
            return;
          } else {
            res.writeHead(200)
            res.write(200, { "Content-Type": "text/html"});
            res.end();  
    }
  })
}
      }
)


module.exports = routes;





//-----------------------------------------------------------------------------------

// Create a server that listens on port 2000 and sends back "Working" for any request to it.

// const http = require("http");
// const port = 2000;
// http.createServer(requestHandler).listen(port, () => console.log("Server live..."));

// function requestHandler(req, res) {
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write("Working");
//   res.end();
// 