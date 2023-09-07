const sessionBtn = document.getElementById("sessionBtn");
sessionBtn.addEventListener("click", () => {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

const readSession = document.getElementById("readSesssion");
readSession.addEventListener("click", () => {
  const info = sessionStorage.getItem("info");
  alert(info);
});

const localBtn = document.getElementById("localBtn");
localBtn.addEventListener("click", () => {
  const input = document.getElementById("local");
  localStorage.setItem("infoLocal", input.value);
  input.value = "";
});

const readLocal = document.getElementById("readLocal");
readLocal.addEventListener("click", () => {
  const info = localStorage.getItem("infoLocal");
  alert(info);
});
