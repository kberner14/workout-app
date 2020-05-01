const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
    day: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      trim: true,
      required: "Oops! What kind of workout is this?"
    },
    name: {
      type: String,
      trim: true,
      required: "Workout name must be listed"
    },
    duration: {
      type: Number,
      required: "You can't expect to do this forever?",
      min: 1
    },
    weight: {
      type: Number,
      required: "Don't be shy! Light weights or heavy, it's all progress!",
      min: 1
    },
    reps: {
      type: Number,
      required: "Should know how many reps to do",
      min: 1
    },
    sets: {
      type: Number,
      required: "Should know how many sets to do",
      min: 1
    },
    distance: {
      type: Number,
      required: "Need to know how far to go",
      min: 1
    }
  }
]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;