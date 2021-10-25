const express = require("express");
const mongoose = require("mongoose");
// added as its in the package.json
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// for use with morgan
app.use(logger("dev"));
app.use(express.static("public"));

// workout is the name of my database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes - This is the right route, I need to make the file
//app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
