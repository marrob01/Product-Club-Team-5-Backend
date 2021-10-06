let mongoose = require("mongoose");

let skillSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    benefits: String
})

let Skill = mongoose.model("Card", skillSchema);

module.exports = Skill