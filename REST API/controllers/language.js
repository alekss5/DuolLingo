const Language = require('../models/languageSchema');
const Section = require('../models/section');


exports.createLanguage = async (req, res) => {
  try {
    const { language, sections } = req.body;
    const newLanguage = await Language.create({ language, sections });
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createSection = async (req, res) => {
  try {
    const { sectionNumber, sectionUnitNumber, sectionName, lessonsCount, lessonIds } = req.body;
    const newSection = await Section.create({ sectionNumber, sectionUnitNumber, sectionName, lessonsCount, lessonIds });
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
