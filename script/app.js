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

    gameOver = acabarJogo();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

const acabarJogo = () => {
  let condicaoDeVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < condicaoDeVitoria.length; i++) {
    const seq = condicaoDeVitoria[i];

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
  return velha();
};

const refresh = () => document.location.reload();

const velha = () => {
 let posicoes = board;
   
  for (let i = 0; i < posicoes.length; i++) {
    if (posicoes[i] === "") {
      return false;
    }
}
return acabou();};

function animacaoDeVitoria () {
  
}