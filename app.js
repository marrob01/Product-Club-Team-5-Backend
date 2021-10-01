let express = require("express");
let router = require("./router");
let cors = require("cors");
const { application } = require("express");

let app = express();

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app