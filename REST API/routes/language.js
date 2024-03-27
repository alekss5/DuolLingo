const express = require('express');
const router = express.Router();
const languageController = require('../controllers/language');

// Routes for languages
router.post('/', languageController.createLanguage);
router.get('/', languageController.getAllLanguages);

module.exports = router;
