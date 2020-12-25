const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");
const questionController = require('./question');

router.get("/getAllQuestion",auth,questionController.getAllQuestion);
router.get("/getAllEasyQuestion",auth,questionController.getAllEasyQuestion);
router.get("/getAllHardQuestion",auth,questionController.getAllHardQuestion);
router.post("/getOneQuestionSet",auth,questionController.getOneQuestionSet);

module.exports = router;
