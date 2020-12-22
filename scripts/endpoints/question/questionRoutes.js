const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");
const questionController = require('./question');

router.get("/getAllQuestion",auth,questionController.getAllQuestion);

module.exports = router;