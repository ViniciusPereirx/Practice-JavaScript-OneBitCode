function addPlayer() {
  const position_player = document.getElementById("position_player").value;
  const name_player = document.getElementById("name_player").value;
  const number_player = document.getElementById("number_player").value;

  //   console.log({ position_player, name_player, number_player });

  const confirmation = confirm(
    `Escalar ${name_player} como ${position_player}?`
  );

  if (confirmation) {
    const teamlist = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = `player-${number_player}`;
    playerItem.innerText = `${position_player}: ${name_player}(${number_player})`;
    teamlist.appendChild(playerItem);

    document.getElementById("position_player").value = "";
    document.getElementById("name_player").value = "";
    document.getElementById("number_player").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const removePlayer = document.getElementById(`player-${number}`);

  const confirmation = confirm(`Remover o ${removePlayer.innerText}?`);

  if (confirmation) {
    removePlayer.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
