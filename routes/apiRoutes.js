const router = require("express").Router();
const Workout = require("../models/Workout.js");


//Route for adding a workout
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //Ruote for getting all workouts
  router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;