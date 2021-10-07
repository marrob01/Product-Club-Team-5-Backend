let mongoose = require("mongoose");

// const mongoURI = process.env.MONGOURI
// console.log(mongoURI);

const db = mongoose.connection;

// mongoose.connect( process.env.MONGOURI, {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, ()=>{
//     console.log("database connection checked");
// })

db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log("mongo connected")})
db.on('disconnected', ()=> { console.log("mongo disconnected")})



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
    console.log(process.env.DB_URL)


}

mongoose.connect(connectionString, mongooseConnectionConfig);