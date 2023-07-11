const mongoose = require("mongoose");

const checklistSchema = mongoose.Schema({
  name: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], //1 checklist para varias tarefas
}); //modelo

module.exports = mongoose.model("Checklist", checklistSchema);
