const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
  QuestionSet: { type: String, required: true },
  Questions: [OneQuestions],
});

const OneQuestions = new mongoose.Schema({
  Type: { type: String, required: true },
  Question: { type: String, required: true },
  Hint:{ type: String, required: true },
  Answer:{ type: String, required: true },
  Explanation :{ type: String, required: true },
  KeyWords :{ type: String, required: true },
  SourceID:{ type: String, required: true },
  ChapterID:{ type: Number, required: true },
  PageNumber:{ type: Number, required: true },
});



const QuestionsSets = mongoose.model("question", QuestionsSchema);