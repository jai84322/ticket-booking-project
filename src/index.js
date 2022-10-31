const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const route = require("./routes/route.js");
const app = express();
dotenv.config()

app.use(express.json())

mongoose.connect( process.env.CONNECTION)
.then(()=>console.log('MongoDB is connected'))
.catch(err => console.log(err));

app.use('/', route)

app.listen(process.env.PORT || 4000, function () {
    console.log('Express is running on port ' + (process.env.PORT || 4000))
});