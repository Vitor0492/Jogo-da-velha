document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

const titulo = document.getElementById("title");

const handleClick = (event) => {
  const square = event.target;
  const position = square.id;

  if(handleMove(position)){

    setTimeout(() => {
  
      titulo.innerHTML = `FIM! Vencedor: Jogador ${playerTime}`;
     
    }, 20)
  };
  updateSquare(position);
};
const updateSquare = (position) => {
const square = document.getElementById(position.toString())
const symbol = board[position];
square.innerHTML = `<div class='${symbol}'></div>`;
}

const acabou = () => { 
  let title = document.getElementById("title");
  title.innerHTML = "Deu velha!";
}
