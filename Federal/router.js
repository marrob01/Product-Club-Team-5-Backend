let express = require("express");
let router = new express.Router();

let controller = require("./controller");

router.get('/federal', controller.readAll);
router.get('/federal/:id', controller.readById);
router.post('/federal', controller.create);
router.put('/federal/:id', controller.update);
router.delete('/federal/:id', controller.delete);

module.exports = router