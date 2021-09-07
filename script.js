'use strict'
const canvas = document.querySelector(".canvas");


//initial canvas size
let canvasSize = 100;

//create canvas
function createCanvas(canvasSize){
for (let i = 1; i <= canvasSize; i++) {
  for (let j = 1; j <= canvasSize; j++) {
    const cell = document.createElement("div");
    cell.style.gridArea = `${i}/${j}/${i + 1}/${j + 1}`;
    cell.style.width = `calc(90vh/${canvasSize})`;
    cell.style.height = `calc(90vh  /${canvasSize})`;
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
//declare a global variable from within the function scope with "window"
window.cells = document.querySelectorAll(".cell");
}
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
  });
});
};
createCanvas(canvasSize);



const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () =>{
  let size = parseInt(window.prompt("Size of the side of the new grid(# of squares)?)"));
  document.querySelector(".canvas").innerHTML = "";
  createCanvas(size);
});
