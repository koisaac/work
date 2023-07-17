const express = require("express");
const app = express();
const http = require("http");
const port = 4080;
const fs = require("fs").promises;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/test.html");
});
app.get("/a", function (req, res) {
    let { number } = req.query;

    res.sendFile(__dirname + "/public/a.html");
    console.log(number);
});

app.listen(port);
