const db = require('../models'); 

module.exports = function(app) {

//post route for a new Workout 
app.post("/api/workouts", async ({ body }, res) => {
// console.log(body); 
await db.Workout.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

// route for all Workouts 
app.get("/api/workouts", (req, res) => {
db.Workout.find({})
.then(data => {
    res.json(data); 
})
.catch(err => {
    res.json(err); 
});
}); 

//update a workout with ID 
app.put("/api/workouts/:id", ({ body, params }, res) => {
    const workoutId = params.id;
    let savedExercises = [];

    // find all excercises with the workout ID
        db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises);
            let allExercises = [...savedExercises, body]; 
            updateWorkout(allExercises); 
        })
        .catch(err => {
            res.json(err);
        });

    function updateWorkout(exercises){
        db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, 
            function(err, doc){
                if(err){
                    console.log(err)
                }
            })
        }      
});


//route for stats page - Need to limit this to the most recent seven workouts
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data); 
    })
    .catch(err => {
        res.json(err); 
    });
}); 

}; 


