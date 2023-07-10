const express = require("express");
const res = require("express/lib/response");
const checklistsRouter = require("./src/routes/checklist");

const app = express();
app.use(express.json());

app.use("/checklists", checklistsRouter);

app.listen(3000, () => {
  console.log("Servidor Iniciado!");
});
