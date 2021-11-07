let express = require("express");
let router = require("./router");
let cors = require("cors");
let app = express();


app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(cors());
app.use(router);




module.exports = app
