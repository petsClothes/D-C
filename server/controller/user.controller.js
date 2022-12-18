const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({ message: `${req.body.name} added successfuly` });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
};

const login = async (req, res) => {
  let body = req.body;

  const user = await User.findOne({ email: body.email });

  if (!user) {
    return { status: "error", error: "username not found" };
  } else {
    const token = jwt.sign({ name: user.name, email: user.email }, "topsecret");
    return res.json({ user: token, status: "all good" });
  }
};

module.exports = { signUp, login };
