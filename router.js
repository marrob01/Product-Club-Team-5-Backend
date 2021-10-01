let express = require("express");
let skillRouter = require("./skills/router");

let router = new express.Router();
router.use('/skills', skillRouter);

module.exports = router