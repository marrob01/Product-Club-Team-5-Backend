let mongoose = require("mongoose");

let stateSchema = new mongoose.Schema([
    
    {    
        Grantee_Name: String,
        Grant_Number: String,
        Program_Name: String,
        City: String,
        State: String,
        County: String,
        Award_Fiscal_Year: Number,
        Award_Funding: String
    }]
)


let State = mongoose.model("state", stateSchema);

module.exports = State