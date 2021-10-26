const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter type of excercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter the excercise name"
        },
        duration: {
          type: Number,
          required: "Please neter the duration of the exercise"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      //virtual property allows combining of data
      virtuals: true
    }
  }
);

//use virtual get method 
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration; 
  }, 0); 
}); 

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;