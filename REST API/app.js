const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const feedRoutes = require("./routes/feed");
const authRoutes = require("./routes/auth");
const languageRoutes = require("./routes/language");
const lessonsRutes = require("./routes/lessosns");

app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);
app.use("/language", languageRoutes);
app.use("/lessons", lessonsRutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    const server = app.listen(8080);
    //const server = https.createServer({key:privateKey,cert:certificate},app).listen(8080);

    console.log("Connected to Mongoose");
    // const io = require('./socket').init(server);
    // io.on('connection', socket => {
    //   console.log('Client connected');
    // });
  })
  .catch((err) => {
    console.log(err);
  });
