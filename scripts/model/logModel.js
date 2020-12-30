const mongoose = require("mongoose");

const userlogs = new mongoose.Schema({
  LearnerID: { type: Number, required: true },
  SourceID: { type: String, required: true },
  ChapterID:{ type: Number, required: true },
  PageNumber:{ type: Number, required: true },
  isHint :{ type: Boolean, required: true },
  answer :{ type: Boolean, required: true },
  isExplaination:{ type: Boolean, required: true },
  date:{ type: Date, required: true },
});



const userLogs = mongoose.model("userlogs", userlogs);