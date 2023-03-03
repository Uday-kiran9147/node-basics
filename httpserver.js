const helper = require("./helper");
const http = require("http");

const myserver = http.createServer(function (req, res) {
    res.end("Hello During Mid-semister second update " + total);
});

myserver.listen(2000);

var total = helper.sum(20, 30);

console.log("Total : " + total);