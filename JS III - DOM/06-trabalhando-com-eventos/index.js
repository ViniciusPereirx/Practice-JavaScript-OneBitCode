function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;

  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} registrado!`);
  } else {
    alert("As senhas não combinam!");
  }
}

const button = document.getElementById("btnRegister");

button.addEventListener("click", register);

function removeListener() {
  button.removeEventListener("click", register);
  alert("Event remove!");
}

button.addEventListener("mouseover", (ev) => {
  console.log(ev.currentTarget);
});
