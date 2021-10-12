let mongoose = require("mongoose");
const db = mongoose.connection;



db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log("mongo connected")})
db.on('disconnected', ()=> { console.log("mongo disconnected line 8")})



let mongooseConnectionConfig = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};
let connectionString = "";
if (process.env.NODE_ENV === "production") {
    connectionString = process.env.DB_URL
} else {
  
    connectionString = "mongodb://localhost/covidBudget";
   console.log("database connection checked");
    // console.log(process.env.DB_URL) // Please fix me- uncommit after deployment 
    
} 


mongoose.connect(connectionString, mongooseConnectionConfig);