let mongoose = require("mongoose");

let stateSchema = new mongoose.Schema({
    Grant: {
        awardID: Number,
	    startDate: Date,
	    endDate: Date,
	    recipientName: String,
	    County: String,
	    City: String,
	    covidObligations: String,
	    awardAmount: Number,
	    awardType: String
    },

    Direct_Payment: {
        awardID: Number,
        startDate: Date,
        endDate: Date,
        recipientName: String,
        County: String,
        City: String,
        covidObligations: String,
        awardAmount: Number,
        awardType: String
    }
})

let State = mongoose.model("Card", stateSchema);

module.exports = State