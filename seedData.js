require("./database.js");
let mongoose = require("mongoose");
let stateModel = require("./state/model");
let federalModel = require("./federal/model");
let data = require("./data.json");
// let federalJson = require("./federalData.json");

stateModel.deleteMany({})
    .then(() => {
        stateModel.create(dataJson)
            .then(states => {
                mongoose.disconnect()
            })
    })

federalModel.deleteMany({})
    .then(() => {
        federalModel.create(federalJson)
            .then(federal => {
                mongoose.disconnect()
            })
    })
