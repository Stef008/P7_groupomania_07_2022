require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { userLogin, userSignup } = require("./controllers/user");

const app = express();

app.use(express.json());
app.use(cors());


app.post("/auth/login", userLogin);
app.post("/auth/signup", userSignup);
module.exports = app;
