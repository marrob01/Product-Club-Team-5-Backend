let Skill = require("./model.js");

let controller = {
    create(request, response) {
        let skill = request.body
        Skill
            .create(skill)
            .then(skill => response.json(skill))
    },

    readById(request, response) {
        let id = request.params.id
        Skills
            .findById(id)
            .then(skills => response.json(skill))
    },

    readAll(request, response) {
        Skill
            .find({})
            .then(skills => response.json(skills))
    },

    update(request, response) {
        let skill = JSON.parse(request.body)
        let id = request.params.id
        Skill
            .findByIdAndUpdate(id, skill, { new: true })
            .then(skill => response.json(skill))
    },

    delete(request, response) {
        let id = request.params.id
        Skill
            .findByIdAndDelete(id)
            .then(() => response.json({ ok: true }))
    }
}

module.exports = controller