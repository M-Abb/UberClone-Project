const userModel = require("../models/user.model");
const userservice = require("../services/userServices");
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  //USER KO REGISTER KARNA KA LOGIC
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const hashpassword = await userModel.hashpassword(password);
  const user = await userservice.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashpassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};
