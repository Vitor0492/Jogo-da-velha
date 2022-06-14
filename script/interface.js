document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

const handleClick = (event) => {
  const square = event.target;
  const position = square.id;

  if(handleMove(position)){

    setTimeout(() => {
  
      alert(" Fim de jogo - Vencedor Jogador " +playerTime)

    }, 20)
  };
  updateSquare(position);
};
const updateSquare = (position) => {
const square = document.getElementById(position.toString())
const symbol = board[position];
square.innerHTML = `<div class='${symbol}'></div>`;
}