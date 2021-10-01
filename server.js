let app = require("./app");


const express = require('express');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 9000);

let server = app.listen(app.get('port'));

server.on("listening", () => console.log("Server is listening on ", app.get('port')));
server.on("error", (error) => console.error("Server is sad", error));

module.exports = server
