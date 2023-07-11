const express = require("express");
const checklistsRouter = require("./src/routes/checklist"); //Trabalhando com rotas
require("./config/database"); //Importando MongoDB

const app = express();
app.use(express.json());

app.use("/checklists", checklistsRouter);

app.listen(3000, () => {
  console.log("Servidor Iniciado!");
});
