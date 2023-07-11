const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: {
    type: Boolean,
    default: false,
  },
  checklist: {
    type: mongoose.Schema.Types.ObjectId, //referência
    ref: "Checklist",
    required: true,
  },
}); //modelo

module.exports = mongoose.model("Task", taskSchema);
