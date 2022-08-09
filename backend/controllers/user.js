const jwt = require("jsonwebtoken");
const token = process.env.JWT_PASSWORD;

const { users } = require("../dataBase/db.js");

function userLogin(req, res) {
  const { email, password } = req.body;
  const user = getUser(email);
  if (user == null) return res.status(404).send("User not found");
  if (!isPasswordConfirmed(user, password))
    return res.status(401).send({ error: "Incorrect password" });
  const token = createToken(email);
  res.send({ token: token, email: user.email });
}

function createToken(email) {
  return jwt.sign({ email }, `${token}`, {
    expiresIn: "24h",
  });
}

function getUser(email) {
  return users.find((user) => user.email === email);
}

function isPasswordConfirmed(user, password) {
  return user.password === password;
}

function userSignup(req, res) {
  const { email, password, ctrlPassword } = req.body;
    if (password !== ctrlPassword)
      return res.status(400).send({ error: "Incorrect password" });
    const user = getUser(email);
    if (user != null)
      return res.status(400).send({ error: "User already registered" });
    users.push({ email, password });
    res.send({ email: email, password: password, message:"user create" });
}


module.exports = { userLogin, userSignup };
