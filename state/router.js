let express = require("express");
let router = new express.Router();

let controller = require("./controller");

router.get('/state', controller.readAll);
router.get('/state:id', controller.readById);
router.post('/state', controller.create);
router.put('/state:id', controller.update);
router.delete('/state:id', controller.delete);

module.exports = router