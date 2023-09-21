const copy = document.getElementById("copyToClipboard");

export default copy.addEventListener("click", (ev) => {
  const button = ev.currentTarget;

  const resultInput = document.getElementById("result");

  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value); //Copiando valor do Resultado
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});
