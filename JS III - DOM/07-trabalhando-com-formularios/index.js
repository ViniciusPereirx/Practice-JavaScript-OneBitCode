const form = document.getElementById("orderForm");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const breadType = document.getElementById("breadType").value; //select
  const main = document.querySelector('input[name="main"]').value; //radio
  const observation = document.getElementById("observations").value;

  let salad = "";
  document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
    salad += `${item.value}, `;
  }); //checkbox

  console.log({ name, address, breadType, main, observation, salad });

  const confirmation = confirm(
    `Confirmar este pedido?\n\nCliente: ${name}\nEndereço: ${address}\nTipo do Pão: ${breadType}\nPrincipal: ${main}\nSalada: ${salad}\nObservações: ${observation}`
  );

  if (confirmation) {
    alert("Pedido confirmado! Agradecemos a preferência!");
    document.querySelector("form").reset();
  } else {
    alert("Por favor, faça seu pedido novamente!");
    document.querySelector("form").reset();
  }
});
