const express = require("express");
const User = require("./db");
const cors = require("cors");
const secret = require("./config");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

app.use("/api/v1",mainRouter);




















app.listen(3000,()=>{
    console.log("listening to the port 3000");
})


