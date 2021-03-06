const board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
const symbols = ["o", "x"];
let gameOver = false;

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = EndWin();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

const EndWin = () => {
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winStates.length; i++) {
    const seq = winStates[i];

    const pos1 = seq[0];
    const pos2 = seq[1];
    const pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
};

const refresh = () => document.location.reload();
