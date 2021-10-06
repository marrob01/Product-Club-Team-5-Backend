require("./database.js");
let mongoose = require("mongoose");
let stateModel = require("./state/model");
let federalModel = require("./federal/model");
let json = require("./data.json");

stateModel.deleteMany({})
    .then(() => {
        stateModel.create(json)
            .then(states => {
                mongoose.disconnect()
            })
    })

federalModel.deleteMany({})
    .then(() => {
        federalModel.create(json)
            .then(federal => {
                mongoose.disconnect()
            })
    })
