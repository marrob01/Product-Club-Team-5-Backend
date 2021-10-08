let mongoose = require("mongoose");


let federalSchema = new mongoose.Schema({
    grant: {
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
    directPayment: {
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

let federal = mongoose.model("federal", federalSchema);

module.exports = federal