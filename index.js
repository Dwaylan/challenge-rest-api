const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mysql = require("mysql");
const business = require("./routers/business");
const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(business);

app.listen(PORT, console.log(`I am listening on port ${5000}`));
