const boardRegions = document.querySelectorAll("#gameBoard span");
const start = document.getElementById("start");
let virtualBoard = [];
let turnPlayer = "";

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function initializeGame() {
  virtualBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  document.querySelector("h2").innerHTML =
    'Vez de: <span id="turnPlayer"></span>';
  updateTitle();
  boardRegions.forEach((element) => {
    element.classList.remove("win");
    element.innerText = "";
    element.classList.add("cursorRegion");
    element.addEventListener("click", handleBoardClick);
  });
}

function handleWin(regions) {
  regions.forEach((region) => {
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").innerHTML = playerName + " venceu!";
}

function handleBoardClick(ev) {
  const span = ev.currentTarget;
  const region = span.dataset.region; //N.N //valor do "span"
  const rowColumnPair = region.split("."); // ["N", "N"]
  const row = rowColumnPair[0]; //posição da linha
  const column = rowColumnPair[1]; //posição da coluna
  if (turnPlayer === "player1") {
    span.innerText = "X";
    virtualBoard[row][column] = "X";
  } else {
    ev.currentTarget.innerText = "O";
    virtualBoard[row][column] = "O";
  }

  console.clear();
  console.table(virtualBoard);

  disableRegion(span);

  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
    boardRegions.forEach((region) => {
      region.removeEventListener("click", handleBoardClick);
    });
  } else if (virtualBoard.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector("h2").innerHTML = "Empate!";
  }
}

function getWinRegions() {
  const winRegions = [];

  if (
    virtualBoard[0][0] &&
    virtualBoard[0][0] === virtualBoard[0][1] &&
    virtualBoard[0][0] === virtualBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    virtualBoard[1][0] &&
    virtualBoard[1][0] === virtualBoard[1][1] &&
    virtualBoard[1][0] === virtualBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    virtualBoard[2][0] &&
    virtualBoard[2][0] === virtualBoard[2][1] &&
    virtualBoard[2][0] === virtualBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    virtualBoard[0][0] &&
    virtualBoard[0][0] === virtualBoard[1][0] &&
    virtualBoard[0][0] === virtualBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    virtualBoard[0][1] &&
    virtualBoard[0][1] === virtualBoard[1][1] &&
    virtualBoard[0][1] === virtualBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    virtualBoard[0][2] &&
    virtualBoard[0][2] === virtualBoard[1][2] &&
    virtualBoard[0][2] === virtualBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    virtualBoard[0][0] &&
    virtualBoard[0][0] === virtualBoard[1][1] &&
    virtualBoard[0][0] === virtualBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    virtualBoard[0][2] &&
    virtualBoard[0][2] === virtualBoard[1][1] &&
    virtualBoard[0][2] === virtualBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

function disableRegion(element) {
  element.classList.remove("cursorRegion");
  element.removeEventListener("click", handleBoardClick);
}

start.addEventListener("click", initializeGame);
