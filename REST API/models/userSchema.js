const mongoose = require("mongoose");
const sectionSchema = require("./section");

const courseSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    required: true,
    default: 0,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  hearts: {
    type: Number,
    required: true,
    default: 5,
    max:5,
    min:0,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  daysStreak: {
    type: Number,
    required: true,
    default: 0,
  },
  heartDecreaseTime: {
    type: Date,
    default:null,
  },
  courses: [courseSchema],
  currentCourse: {
    type: String,
    required: true,
  },
  totalXp: {
    type: Number,
    required: true,
    default: 0,
  },
  todayWinSteak: {
    type: Boolean,
    required: true,
    default: false,
  },
  progress: {
    type: [sectionSchema],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
