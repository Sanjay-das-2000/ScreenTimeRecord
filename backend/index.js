const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
require('dotenv').config();

const ConnectDB = require('./database/dbConnection.js');
const router = require("./route/route.js");

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', router);

ConnectDB();

const PORT = 8000;

app.get("/", (req,res) => {
    res.send("hello");
})

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})