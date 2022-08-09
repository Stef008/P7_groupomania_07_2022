require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { userLogin } = require("./controllers/user");

const app = express();

app.use(express.json());
app.use(cors());


app.post("/auth/login", userLogin);

module.exports = app;
