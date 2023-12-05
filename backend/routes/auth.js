const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
router.post(
  "/",
  [
    body("email", "Email must be valid email").isEmail(),
    body("name", "Name should be at least 1").isLength({ min: 1 }),
    body("password", "passwords should be longer than 5 char.").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => res.json(err.message));
  }
);

module.exports = router;
