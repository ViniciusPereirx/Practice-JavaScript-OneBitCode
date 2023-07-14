const express = require("express");

const Checklist = require("../models/checklist");
const Task = require("../models/task");

const checklistDependentRouter = express.Router();
const simpleRouter = express.Router();

checklistDependentRouter.get("/:id/tasks/new", async (req, res) => {
  try {
    const task = new Task();
    res
      .status(200)
      .render("tasks/new", { checklistId: req.params.id, task: task });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao carregar a tarefa" });
  }
});

simpleRouter.delete("/:id", async (req, res) => {
  try {
    let task = await Task.findByIdAndDelete(req.params.id); //Encontrando ID da task e deletando
    let checklist = await Checklist.findById(task.checklist); //Encontrando ID da task dentro do checklists internamente
    let taskToRemove = checklist.tasks.indexOf(task._id); //Pegando a posição do elemento (task), dentro do checklist
    checklist.tasks.splice(taskToRemove, 1); //Remover um elemento do objeto que foi passado do Array "tasks"
    checklist.save();
    res.redirect(`/checklists/${checklist._id}`);
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao delete uma tarefa" });
  }
});

checklistDependentRouter.post("/:id/tasks", async (req, res) => {
  const { name } = req.body.task;
  const task = new Task({ name, checklist: req.params.id });
  try {
    await task.save();
    const checklist = await Checklist.findById(req.params.id);
    checklist.tasks.push(task);
    await checklist.save();
    res.redirect(`/checklists/${req.params.id}`);
  } catch (error) {
    const errors = error.errors;
    res.status(422).render("tasks/new", {
      task: { ...task, errors },
      checklistId: req.params.id,
    });
  }
});

simpleRouter.put("/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  try {
    task.set(req.body.task);
    await task.save();
    res.status(200).json({ task });
  } catch (error) {
    let errors = error.errors;
    res.status(422).json({ task: { ...errors } });
  }
});

module.exports = {
  checklistDependent: checklistDependentRouter,
  simple: simpleRouter,
};
