const Feed = require("../models/feedSchema");

const feedController = {
  postFeed: async (req, res) => {
    try {
      const newFeed = new Feed(req.body);
      await newFeed.save();
      res.status(201).json(newFeed);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllFeed: async (req, res) => {
    try {
      const feeds = await Feed.find();
      res.status(200).json(feeds);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteFeedById: async (req, res) => {
    const feedId = req.params.id;
    try {
      const feed = await Feed.findByIdAndDelete(feedId);
      if (!feed) {
        return res.status(404).json({ message: "Feed not found" });
      }
      res.status(200).json({ message: "Feed deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = feedController;
