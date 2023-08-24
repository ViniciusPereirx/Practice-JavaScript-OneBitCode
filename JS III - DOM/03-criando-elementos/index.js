function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");
  newLi.innerText = "Novo input: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  ul.appendChild(newLi);
  newLi.appendChild(newInput);
}
