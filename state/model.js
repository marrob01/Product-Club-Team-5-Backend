let mongoose = require("mongoose");
const express = require('express');
const router = express.Router();

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

    
    directPayment: {
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

let state = mongoose.model("state", stateSchema);

module.exports = state