require("./database.js");
let mongoose = require("mongoose");
let stateModel = require("./state/model");
// let federalModel = require("./federal/model");

// ONLY SETUP FOR STATE SINCE FEDERAL IS THE SAME

// <---- CREATE STATE ----->
// stateModel.create(
//     {
//         "Grant": {
//             "awardID": 43342,
//             "startDate": "01515001",
//             "endDate": "01515001",
//             "recipientName": "String",
//             "County": "String",
//             "City": "String",
//             "covidObligations": "String",
//             "awardAmount": 1,
//             "awardType": "String"
//         },
//
//         "directPayment": {
//             "awardID": 53873,
//             "startDate": "01515001",
//             "endDate": "01515001",
//             "recipientName": "stacy",
//             "state": "String",
//             "county": "String",
//             "city": "String",
//             "covidObligations": "String",
//             "awardAgency": "String",
//             "awardAmount": 10,
//             "awardType": "String"
//         }
//     })
//     .then(state => {
//         mongoose.disconnect()
//     })

// <---- READ BY ID ----->
//    stateModel
//         .findById("615f80d0c760fd012fa82db2")// update ID
//         .then(state => console.log(state))
//         .then(state => {
//         mongoose.disconnect()
//     })

// <---- READ ALL ----->
// stateModel
//     .find({})
//     .then(states => console.log(states))
//     .then(state => {
//         mongoose.disconnect()
//     })

// <----- DELETE BY ID ----->
// stateModel
//     .findByIdAndDelete("615f91422c44b5b438d8cfc5") // update ID
//     .then(state => {
//     mongoose.disconnect()
// })

// <----- DELETE ALL STATE ----->
// stateModel.deleteMany({})
//     .then(federal => {
//         mongoose.disconnect()
//     })