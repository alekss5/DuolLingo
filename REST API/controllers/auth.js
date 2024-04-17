const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userSchema");
const Language = require("../models/languageSchema");

const MAX_HEARTS = 5;

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { email, name, password, currentCourse } = req.body;

  try {
    const hashedPw = await bcrypt.hash(password, 12);

    const language = await Language.findOne({ language: currentCourse });
    console.log(language.sections[0]);
    if (!language) {
      throw new Error("Language not found");
    }

    const sectionsWithNumberOne = language.sections.filter(
      (section) => section.sectionNumber === 1
    );

    console.log(sectionsWithNumberOne);
    const user = new User({
      email: email,
      password: hashedPw,
      name: name,
      userName: name + Math.random().toString().slice(2, 8),
      joinedDate: new Date(),
      courses: [
        {
          language: currentCourse,
          xp: 0,
        },
      ],
      currentCourse: currentCourse,
      progress: sectionsWithNumberOne,
    });

    const result = await user.save();
    res.status(201).json({ message: "User created!", userId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  let loadedUser;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Wrong password!");
      error.statusCode = 401;
      throw error;
    }
    if (loadedUser.hearts < MAX_HEARTS) {
      const currentTime = new Date();
      const timePassed = currentTime - new Date(loadedUser.heartDecreaseTime);

      const heartsToAdd = Math.floor(timePassed / (4 * 60 * 60 * 1000)); // Calculate hearts to add based on 4 hours

      if (heartsToAdd > 5 || loadedUser.hearts + heartsToAdd > 5) {
        loadedUser.hearts = 5;
        loadedUser.heartDecreaseTime = null;
      } else {
        loadedUser.hearts += heartsToAdd;
        const newHeartDecreaseTime = new Date(
          loadedUser.heartDecreaseTime.getTime() +
            4 * 60 * 60 * 1000 * heartsToAdd
        );
        loadedUser.heartDecreaseTime = newHeartDecreaseTime;
      }
      loadedUser.save();
    }

    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      },
      "privatekey",
      { expiresIn: "30d" }
    );
    console.log("user logged in successfully");

    res.status(200).json({ token: token, userData: loadedUser });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.decreaseHearts = async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });

  if (!user) {
    const error = new Error("A user with this email could not be found.");
    error.statusCode = 401;
    throw error;
  }

  user.hearts -= 1;
  if (user.heartDecreaseTime === null) {
    user.heartDecreaseTime = new Date();
  }

  await user.save();
};

exports.updateStackAndPoints = async (req, res, next) => {
  const email = req.body.email;
  const points = req.body.points;

  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error("A user with this email could not be found.");
    error.statusCode = 401;
    throw error;
  }

  if (user.todayWinSteak === false) {
    user.todayWinSteak = true;
    user.daysStreak += 1;
  }
  user.points += points;
  await user.save();
};
