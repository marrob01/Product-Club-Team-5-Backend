let mongoose = require("mongoose");

let skillSchema = new mongoose.Schema({
    grants: {
        awardId: Number,
        startDate: Date,
        endDate: Date,
        recipientName: String,
        state: String,
        county: String,
        city: String,
        covidObligations: String,
        awardAmount: Number,
        awardType: String, 
    },
    directPayments: {
        awardId: Number,
        startDate: Date,
        endDate: Date,
        recipientName: String,
        state: String,
        county: String,
        city: String,
        covidObligations: String,
        awardingAgency: String,
	    awardingSubAgency: String,
        awardAmount: Number,
        awardType: String, 
    }

})

let Skill = mongoose.model("Card", skillSchema);

module.exports = Skill