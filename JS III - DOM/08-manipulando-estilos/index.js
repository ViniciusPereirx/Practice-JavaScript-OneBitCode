const light = document.getElementById("lightBtn");
const dark = document.getElementById("darkBtn");
const switchBtn = document.getElementById("switchBtn");

function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDrakTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

light.addEventListener("click", useLightTheme);
dark.addEventListener("click", useDrakTheme);
switchBtn.addEventListener("click", switchTheme);
