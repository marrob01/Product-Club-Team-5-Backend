let stateModel = require("./model.js");
const express = require('express');
const router = express.Router();



let controller = {
    create(request, response, err) {
        let state = request.body

        if(response.status === 200 || 201){
            stateModel
                .create(state)
                .then(state => response.json(state))
            console.log("Added state info :-)" , state)
        } else if(err){
            console.log(`There was an error on: ${err}`)
        }

        
       
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