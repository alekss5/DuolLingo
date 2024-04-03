const LessonsCollection = require("../models/lessonsSchema");
const languageSchema = require("../models/languageSchema");
const lessonsController = {
  // Controller for creating a new lesson
  createLesson: async (req, res) => {
    const sectionName = req.body.section;
    const language = req.body.language;
    console.log(sectionName);

    try {
      if (!req.body || !req.body.data) {
        throw new Error("Request body or data is missing");
      }

      const data = req.body.data;

      const lesson = new LessonsCollection({ data: data });
      await lesson.save();
      const lessonId = lesson._id;

      console.log(lessonId);

      const result = await languageSchema.updateOne(
        { language: language, "sections.sectionName": sectionName },
        {
          $push: { "sections.$.lessonIds": { _id: lessonId } },
          $inc: { "sections.$.lessonsCount": 1 },
        }
      );

      console.log(result);

      if (result.nModified === 0) {
        throw new Error(
          `Section '${sectionName}' not found in language '${language}'.`
        );
      }

      res
        .status(201)
        .json({ message: "Lesson created successfully", lessonId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  // Controller for getting all lessons
  getAllLessons: async (req, res) => {
    try {
      const lessons = await LessonsCollection.find();
      res.status(200).json(lessons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller for getting a lesson by ID
  getLessonById: async (req, res) => {
    try {
      const lesson = await LessonsCollection.findById(req.params.id);

      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.status(200).json(lesson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller for updating a lesson by ID
  updateLessonById: async (req, res) => {
    try {
      const lesson = await LessonsCollection.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.status(200).json({ message: "Lesson updated successfully", lesson });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller for deleting a lesson by ID
  deleteLessonById: async (req, res) => {
    try {
      const lesson = await LessonsCollection.findByIdAndDelete(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.status(200).json({ message: "Lesson deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = lessonsController;
