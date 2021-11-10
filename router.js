let express = require("express");
let stateRouter = require("./state/router");
let federalRouter = require("./federal/router");
require('serverless-http');

let router = new express.Router();
router.use('/state', stateRouter);
router.use('/federal', federalRouter);

module.exports = router