const path = require("path");

module.exports = function(app) {

    //return to home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //route for excercise html
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //route for stats html
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};

// these ruotes do not load
// ./public/exercise.html

// /public/stats.html

//../exercise.html

// /exercise.html