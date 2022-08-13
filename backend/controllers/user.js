const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_PASSWORD;

const { users, prisma } = require("../dataBase/db.js");

async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
  const user = await getUser(email);
  if (user == null) return res.status(404).send({ error: "User not found" });

  const isPasswordConfirmed = await checkPassword(user, password)
      if (!isPasswordConfirmed) return res.status(401).send({ error: "Incorrect password" });
      const token = createToken(email) 
        res.send({ token: token, email: user.email })
  }
  catch(error) {
     res.status(500).send({ error })
  }
}

function createToken(email) {
  return jwt.sign({ email }, `${secret}`, {
    expiresIn: "24h",
  });
}

function getUser(email) {
  return prisma.user.findUnique({ where: {email} });
}

function checkPassword(user, password) {
  return bcrypt.compare(password, user.password);
}

async function userSignup(req, res) {
  const { email, password, ctrlPassword } = req.body;
  if (password !== ctrlPassword)
    return res.status(400).send({ error: "Incorrect password" });
  const user = getUser(email);
  if (user != null) return res.status(400).send("User already registered");
  passwordHash(password)
    .then((hash) => {
      registerUser({ email, password: hash });
      res.send({ email: email });
    })
    .catch((error) => res.status(500).send({ error }));
}

passwordHash = (password) => {
  return bcrypt.hash(password, 10);
};

userSaved = (user) => {
  users.push(user);
};

module.exports = { userLogin, userSignup };
