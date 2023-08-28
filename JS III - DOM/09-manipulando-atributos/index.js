const input = document.getElementById("input");

const value = document.getElementById("value");
value.addEventListener("click", () => {
  input.value = "Olá, mundo";
  console.log(input.value);
  console.log(input.getAttribute("value"));
});

const type = document.getElementById("type");
type.addEventListener("click", () => {
  //   input.type = input.type !== "radio" ? "radio" : "text";
  //   input.type = input.type !== "date" ? "date" : "text";
  input.setAttribute("type", "checkbox");
});

const placeholder = document.getElementById("placeholder");
placeholder.addEventListener("click", () => {
  input.placeholder = input.placeholder === "" ? "Teste" : "";
});

const disable = document.getElementById("disable");
disable.addEventListener("click", () => {
  input.disabled = true;
  // input.setAttribute("disabled", !input.disabled);
});

const data = document.getElementById("data");
data.addEventListener("click", () => {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  const outroData = (input.dataset.somethingElse = "Algum outro valor");
  console.log(outroData);
});
