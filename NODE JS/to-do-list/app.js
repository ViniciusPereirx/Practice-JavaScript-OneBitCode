const express = require("express");
const path = require("path"); //Caminho para EJS

const checklistsRouter = require("./src/routes/checklist"); //Trabalhando com rotas
const indexRouter = require("./src/routes/index"); //Trabalhando com rotas
const methodOverride = require("method-override"); //Método para funcionar PUT e DELETE

require("./config/database"); //Importando MongoDB

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Pegando valores do "form"
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(express.static(path.join(__dirname, "public"))); //Arquivos estáticos na pasta 'public' (ex: css)

app.set("views", path.join(__dirname, "src/views")); //Localizando as views
app.set("view engine", "ejs");

app.use("/", indexRouter); //middleware
app.use("/checklists", checklistsRouter); //middleware

app.listen(3000, () => {
  console.log("Servidor Iniciado!");
});
