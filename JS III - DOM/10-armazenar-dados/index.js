const sessionBtn = document.getElementById("sessionBtn");
sessionBtn.addEventListener("click", () => {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

const read = document.getElementById("readSesssion");
read.addEventListener("click", () => {
  const info = sessionStorage.getItem("info");
  alert(info);
});
