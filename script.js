const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const cell = document.createElement("div");
    cell.style.gridArea = `${i}/${j}/${i + 1}/${j + 1}`;
    container.appendChild(cell);
  }
}
