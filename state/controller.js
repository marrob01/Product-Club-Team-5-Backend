let State = require("./model.js");

let controller = {
    create(request, response) {
        let state = request.body
        state
            .create(state)
            .then(state => response.json(state))
    },

    readById(request, response) {
        let id = request.params.id
        states
            .findById(id)
            .then(states => response.json(state))
    },

    readAll(request, response) {
        state
            .find({})
            .then(states => response.json(states))
    },

    update(request, response) {
        let state = JSON.parse(request.body)
        let id = request.params.id
        state
            .findByIdAndUpdate(id, state, { new: true })
            .then(state => response.json(state))
    },

    delete(request, response) {
        let id = request.params.id
        state
            .findByIdAndDelete(id)
            .then(() => response.json({ ok: true }))
    }
}

module.exports = controller