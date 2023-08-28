const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

const port = 8000;

//Intilizing express
const app = express();

//Using body parser to parse over request body

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//connect routes
app.use('/', require('./routes/products'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in connectin api:${err}`);
    }
    console.log(`Api is live on port : ${port}`);
});


