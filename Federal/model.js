let mongoose = require("mongoose");

let federalSchema = new mongoose.Schema({
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
        awardAmount: Number,
        awardType: String, 
    }

})

let Federal = mongoose.model("federal", federalSchema);

module.exports = Federal