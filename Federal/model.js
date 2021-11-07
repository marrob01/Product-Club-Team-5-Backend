let mongoose = require("mongoose");


let federalSchema = new mongoose.Schema(
    
    {
        Award_Id: String,
        Start_Date: Date,
        End_Date: Date,
        Recepient_Name: String,
        Country: String,
        City: String,
        Federal_Covid_19_Obligation: Number,
        Total_Award_Amount: Number,
        cfda_title: String,
        award_description: String,
        Award_Type: String
    }

)

let Federal = mongoose.model("federal", federalSchema);

module.exports = Federal