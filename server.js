const { EventEmitter} = require("events");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { createServer } = require("tls");

const newsLetter = new EventEmitter();

createServer(function(req, res) {
  const { url, method} = req;


  req.on("data", function(chunk) {
    chunks.push(chunk);
  }).on("end", )
})