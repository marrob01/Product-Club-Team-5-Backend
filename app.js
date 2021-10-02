let express = require("express");
let router = require("./router");
let cors = require("cors");
const { application } = require("express");
let x = 1;
let app = express();

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app
