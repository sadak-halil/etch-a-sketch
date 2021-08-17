const container = document.querySelector(".container");

//create 16 x 16 grid
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const cell = document.createElement("div");
    cell.style.gridArea = `${i}/${j}/${i + 1}/${j + 1}`;
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.background = "green";
  });
});
