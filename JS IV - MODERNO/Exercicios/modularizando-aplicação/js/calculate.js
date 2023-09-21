export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const resul = eval(input.value);
  resultInput.value = resul;
  resultInput.classList.remove("error");
}
