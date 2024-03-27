const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  imgSrc: {
    type: String,
    required: true
  },
  feedType: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  mainText: {
    type: String,
    required: true
  },
  secondaryText: {
    type: String,
    required: true
  },
  url: String
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
