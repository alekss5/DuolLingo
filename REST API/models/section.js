const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  sectionNumber: {
    type: Number,
    required: true,
  },
  sectionUnitNumber: {
    type: Number,
    required: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  lessonsCount: {
    type: Number,
    default:0,
  },
  lessonIds: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "lessons",

        },
        index: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    required: true,
  },
});


module.exports = sectionSchema;
