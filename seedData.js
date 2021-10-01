require("./database.js");
let mongoose = require("mongoose");
let skillModel = require("./skills/model");
let skillJson = require("./data.json");

skillModel.deleteMany({})
    .then(() => {
        skillModel.create(skillJson)
            .then(skills => {
                mongoose.disconnect()
            })
    })
