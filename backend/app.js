require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const { userLogin, userSignup } = require("./controllers/user");
const { router } = require("./routes/posts");


app.use(express.json());
app.use(cors());

app.use("/posts", router);

app.post("/auth/login", userLogin);
app.post("/auth/signup", userSignup);


module.exports = app;
