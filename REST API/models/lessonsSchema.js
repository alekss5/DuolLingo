// const mongoose = require('mongoose')

// const Schema = mongoose.Schema;

// const wordSchema = new Schema({
//   word: {
//     type: String,
//     required: true
//   },
//   choices: {
//     type: [String],
//     required: true
//   }
// });

// const quizSchema = new Schema({
//   data: {
//     type: [wordSchema],
//     required: true
//   }
// });

// const lessonsSchema = new Schema({
//   id: {
//     type: Schema.Types.ObjectId,
//     auto:true,
//     required: true
//   },
//   data: {
//     type: [quizSchema],
//     required: true
//   }
// });

// const Word = mongoose.model('Word', wordSchema);
// const Quiz = mongoose.model('Quiz', quizSchema);
// const LessonsCollection = mongoose.model('Lessons', lessonsSchema);

// module.exports = { Word, Quiz, LessonsCollection };
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lessonsSchema = new Schema({
  data: [
      {
          word: {
              type: String,
              required: true,
          },
          choices: [
              {
                  text: {
                      type: String,
                      required: true
                  },
                  icon: {
                      type: String,
                      required: true
                  }
              }
          ]
      }
  ]
});


const LessonsCollection = mongoose.model("Lessons", lessonsSchema);

module.exports = LessonsCollection;
