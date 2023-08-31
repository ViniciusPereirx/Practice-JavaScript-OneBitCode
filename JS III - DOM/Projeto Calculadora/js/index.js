const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const equal = document.getElementById("equal");
const copy = document.getElementById("copyToClipboard");

const themeSwitcher = document.getElementById("themeSwitcher");

const charKey = document.querySelectorAll(".charKey");
const clear = document.getElementById("clear");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

input.focus();

themeSwitcher.addEventListener("click", () => {
  input.focus();
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

charKey.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const valueDataset = charKeyBtn.dataset.value;
    input.value += valueDataset;
  });
});

clear.addEventListener("click", () => {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (ev) => {
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === "Enter") {
    calculate();
  }
});

equal.addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const resul = eval(input.value);
  resultInput.value = resul;
  resultInput.classList.remove("error");
}

copy.addEventListener("click", (ev) => {
  const button = ev.currentTarget;

  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value); //Copiando valor do Resultado
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});
