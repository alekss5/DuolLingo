const mongoose = require('mongoose')
const section = require('./section')


const languageSchema = new mongoose.Schema({
    language: {
      type: String,
      required: true,
    },
    sections: {
      type: [section],
      required: true,
    },
  });

  const homePath = mongoose.model("Language", languageSchema);

  module.exports =homePath;