const router = require("express").Router();

// TODO: import required model/s
const db = require("../models/");

// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  const { body } = req;
  console.log(req.body)
    db.Workout.create(body)
      .then(({ _id }) =>
        db.Workout.findOneAndUpdate(
          { req: _id },
          { $push: { name: req.body.name, type: req.body.type, duration: req.body.duration, weight: req.body.weight, reps: req.body.reps, sets: req.body.sets, distance: req.body.distance }} )
      )
          .then((dbWorkout) => {
            res.json(dbWorkout);
          })
          .catch((err) => {
            res.json(err);
          });
 });

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  // CODE HERE
  // db.findByIdAndUpdate(req.params.id, {
  //   $push : {
  //     exercises: req.body
  //   }
  // })
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   })
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.find({})
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  // CODE HERE
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  // CODE HERE
});

module.exports = router;
