const express = require("express");

const router = express.Router();
const userController = require('./user');

router.post("/login",userController.login);

module.exports = router;
