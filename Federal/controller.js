let federalModel = require("./model.js");

let controller = {
    create(request, response) {
        let federal = request.body
        federalModel
            .create(federal)
            .then(federal => response.json(federal))
    },

    readById(request, response) {
        let id = request.params.id
        federalModel
            .findById(id)
            .then(federal => response.json(federal))
    },

    readAll(request, response) {
        federalModel
            .find({})
            .then(federal => response.json(federal))
    },

    update(request, response) {
        let federal = JSON.parse(request.body)
        let id = request.params.id
        federalModel
            .findByIdAndUpdate(id, federal, { new: true })
            .then(federal => response.json(federal))
    },

    delete(request, response) {
        let id = request.params.id
        federalModel
            .findByIdAndDelete(id)
            .then(() => response.json({ ok: true }))
    }
}

module.exports = controller