const express = require('express');

const feedController = require('../controllers/feed');
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get('/', feedController.getAllFeed);
router.post('/', feedController.postFeed)

router.delete('/delete/:feedId',isAuth,feedController.deleteFeedById)

module.exports = router;