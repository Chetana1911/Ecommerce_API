const mongoose = require("mongoose");

//connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb://127.0.0.1/User_db');
  
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MOngoDB"));

db.once('open',function(){
    console.log("Connected to database::MongoDB");

})
module.exports=db;

