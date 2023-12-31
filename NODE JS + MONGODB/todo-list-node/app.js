const express = require("express");

const methodOverride = require("method-override");

const path = require("path");

//Trabalhando com rotas
const indexRouter = require("./src/routes/index");
const checklistRouter = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");

require("./config/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Usar 'Url' como parâmetro
app.use(methodOverride("_method", { methods: ["POST", "GET"] })); //Utilizando para carregar o "Form"

//Utilizando EJS, conectar com o FrontEnd
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//middlewares
app.use("/", indexRouter);
app.use("/checklists", checklistRouter);
app.use("/checklists", taskRouter.checklistDependent);
app.use("/tasks", taskRouter.simple);

//Escutando a porta
app.listen(3000, () => {
  console.log("Servidor iniciado!");
});
