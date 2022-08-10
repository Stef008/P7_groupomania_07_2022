const jwt = require("jsonwebtoken");

function ctrlToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (token == null) return res.status(401).send({ error: "Access Denied" });

  jwt.verify(token, process.env.JWT_PASSWORD, (error, decoded) => {
    if (error) return res.status(401).send({ error: "Access Denied" });
    req.email = decoded.email;
    console.log('decoded:', decoded.email);
    next();
  });
}

module.exports = { ctrlToken };