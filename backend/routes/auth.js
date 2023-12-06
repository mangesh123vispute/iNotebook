const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Mangeshisgood$boy";

router.post(
  "/createuser",
  [
    body("email", "Email must be valid email").isEmail(),
    body("name", "Name should be at least 1").isLength({ min: 1 }),
    body("password", "passwords should be longer than 5 char.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ errors: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    var authToken = jwt.sign(data, JWT_SECRET);
    console.log(jwtdata);
    res.json({ authToken });
  }
);

module.exports = router;
