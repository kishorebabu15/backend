require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//PORT
const port = process.env.PORT || 8080;


const placeRoutes = require("./routes/place")
//Routes
app.use("/api", placeRoutes);
//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}...`);
});