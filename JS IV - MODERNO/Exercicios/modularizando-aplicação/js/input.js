const input = document.getElementById("input");

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

export default input.addEventListener("keydown", (ev) => {
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
