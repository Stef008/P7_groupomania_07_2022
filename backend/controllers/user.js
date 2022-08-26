const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_PASSWORD;

const { prisma } = require("../dataBase/db.js");

async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await getUser(email);
    if (user == null) return res.status(404).send({ error: "User not found" });

    const isPasswordConfirmed = await checkPassword(user, password);
    if (!isPasswordConfirmed)
      return res.status(401).send({ error: "Incorrect password" });
    const token = createToken(email);
    res.send({ token: token, email: user.email });
  } catch (error) {
    res.status(500).send({ error });
  }
}

function createToken(email) {
  return jwt.sign({ email }, `${secret}`, {
    expiresIn: "24h",
  });
}

function getUser(email) {
  return prisma.user.findUnique({ where: { email } });
}

function checkPassword(user, password) {
  return bcrypt.compare(password, user.password);
}

async function userSignup(req, res) {
  const { email, password, ctrlPassword } = req.body;
  const ctrlEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  try {
    if (!ctrlEmail.test(req.body.email)) 
      return res.status(400).send({error: "please enter a valid address"})
    if (ctrlPassword == null)
      return res.status(400).send({ error: "Password not confirmed" });
    if (password !== ctrlPassword)
      return res.status(400).send({ error: "Incorrect password" });
    const userRegistered = await getUser(email);
    if (userRegistered != null)
      return res.status(400).send({ error:"User already registered"});

    const hash = await passwordHash(password);
    const user = await registerUser({ email, password: hash });
    res.send({ user });
  } catch (error) {
    res.status(500).send({ error });
  }
}

passwordHash = (password) => {
  return bcrypt.hash(password, 10);
};

registerUser = (user) => {
  return prisma.user.create({ data: user });
};

module.exports = { userLogin, userSignup };
