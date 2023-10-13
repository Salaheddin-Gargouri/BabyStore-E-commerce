const jwt = require("jsonwebtoken");
const Client = require("../models/client");

const config = require("config");
const secret = config.get("secret");

//******************************************* */
const verifyAuth = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    const decoded = await jwt.verify(token, secret);
    if (!decoded) return res.status(404).json({ msg: "invalid token" });
    const client = await Client.findById(decoded.id);
    if (!client) return res.status(404).json({ msg: "invalid token" });
    else {
      req.client = client;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = verifyAuth;
