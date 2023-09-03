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
    element.addEventListener("click", handleBoardClick);
  });
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

  const winRegions = getWinRegigions();
}

function getWinRegigions() {
  const winRegions = [];
}

function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBoardClick);
}

start.addEventListener("click", initializeGame);
