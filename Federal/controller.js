let federalModel = require("./model.js");


let controller = {
    create(request, response) {
        let federal = request.body
        federalModel
            .create(federal)
            .then(federal => response.json(federal))
            console.log('is able to create federal')
    },

    readById(request, response) {
        let id = request.params.id
        federalModel
            .findById(id)
            .then(federal => response.json(federal))
            console.log('is able to read by id')
    },

    async readAll(request, response)  {
        const pageSize = 12;
        const page = parseInt(request.query.page || "0");
        await federalModel
            .find({}).limit(pageSize).skip(pageSize * page)
            .then(federal => response.json({totalPages: federal.length, federal}))
            console.log('is able to read all federal')
    },

    update(request, response) {
        let federal = JSON.parse(request.body)
        let id = request.params.id
        federalModel
            .findByIdAndUpdate(id, federal, { new: true })
            .then(federal => response.json(federal))
            console.log('is able to update federal by id')
    },

    delete(request, response) {
        let id = request.params.id
        federalModel
            .findByIdAndDelete(id)
            .then(() => response.json({ ok: true }))
            console.log('is able to delete by id')
    }
}

module.exports = controller