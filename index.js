const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto')

dotenv.config();

mongoose
    .connect(
    process.env.MONGO_URL
    ).then(()=>{
        console.log("Connected to mongodb")
    }).catch((err)=> {
        console.log("[db error]" + err)
});

app.use(session({
    secret: 'COMP3322',
    store: new SessionStore({
        connection: mongoose.connection,
        ttl: 3600
    }),
    resave: false,
    saveUninitialized: true,
    cooke: {maxAge: 3600 * 1000}
}));


app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen( process.env.PORT || 5000, ()=>{
    console.log("Backend listening on " + process.env.PORT);
});