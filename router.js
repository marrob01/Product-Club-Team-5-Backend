let express = require("express");
let skillRouter = require("./router");

let router = new express.Router();
router.use('/skills', skillRouter);

module.exports = router