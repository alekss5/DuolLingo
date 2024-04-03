const express = require('express');
const lessonsController = require('../controllers/lessons');
const isAuth = require("../middleware/is-auth");

const router = express.Router();


router.post('/', lessonsController.createLesson); //done
router.get('/', lessonsController.getAllLessons);
router.get('/:id', lessonsController.getLessonById);
router.put('/:id',isAuth, lessonsController.updateLessonById);
router.delete('/:id',isAuth, lessonsController.deleteLessonById);

module.exports = router;
