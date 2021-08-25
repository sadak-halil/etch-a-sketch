const canvas = document.querySelector(".canvas");
//TODO: 
// 1. add the drawing eventlistener in the create canvas function
// 2. when reset is clicked, clean the container div and re-create the canvas 

//initial canvas size
let canvasSize = 16;
//create canvas
function createCanvas(camnvasSize){
for (let i = 1; i <= canvasSize; i++) {
  for (let j = 1; j <= canvasSize; j++) {
    const cell = document.createElement("div");
    cell.style.gridArea = `${i}/${j}/${i + 1}/${j + 1}`;
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}};
createCanvas(canvasSize);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
  });
});

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () =>{
  size = parseInt(window.prompt("Size of the side of the new grid(# of squares)?)"));
  cells.forEach((cell) =>{
    cell.style.backgroundColor = "white";
  });
});
