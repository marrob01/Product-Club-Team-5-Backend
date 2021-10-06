let stateModel = require("./model.js");

let controller = {
    create(request, response) {
        let state = request.body
        stateModel
            .create(state)
            .then(state => response.json(state))
    },

    readById(request, response) {
        let id = request.params.id
       stateModel
            .findById(id)
            .then(state => response.json(state))
    },

    readAll(request, response) {
        stateModel
            .find({})
            .then(states => response.json(states))
    },

    update(request, response) {
        let state = JSON.parse(request.body)
        let id = request.params.id
        stateModel
            .findByIdAndUpdate(id, state, { new: true })
            .then(state => response.json(state))
    },

    delete(request, response) {
        let id = request.params.id
        stateModel
            .findByIdAndDelete(id)
            .then(() => response.json({ ok: true }))
    }
}

module.exports = controller