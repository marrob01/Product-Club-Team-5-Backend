let mongoose = require("mongoose");


let federalSchema = new mongoose.Schema(
    
    {
        Award_Id: String,
        Start_Date: Date,
        End_Date: Date,
        Recipient_Name: String,
        Country: String,
        City: String,
        Federal_Covid_19_Obligations: Number,
        Total_Award_Amount: Number,
        cfda_title: String,
        award_description: String,
        awardType: String
    }

)

let Federal = mongoose.model("federal", federalSchema);

module.exports = Federal