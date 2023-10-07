const container = document.getElementById("container");
let containerStyle = getComputedStyle(container);
let pencil = "ink";
let columns = 16;
let rows = 16;
function createSquareElement() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
}

function deleteSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.remove();
  });
}

function createGridLayoutToContainer(columns, rows) {
  const layout = `
  grid-template-columns: repeat(${columns},auto);
  grid-template-rows: repeat(${rows}auto);`;
  container.style = layout;
}

function createGrid(columns, rows) {
  deleteSquares();
  createGridLayoutToContainer(columns, rows);
  const totalSquares = columns * rows;
  for (i = 0; i < totalSquares; i++) {
    createSquareElement();
  }
  addListenerOnHover();
}
function addListenerOnHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      switch (pencil) {
        case "ink":
          square.style = `background-color: black;`;
          break;
        case "rainbow":
          const red = parseInt(Math.random() * 255);
          const green = parseInt(Math.random() * 255);
          const blue = parseInt(Math.random() * 255);
          square.style = `background-color: rgb(${red},${green},${blue});`;
          break;
      }
    });
  });
}
createGrid(columns, rows);
const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", () => {
  createGrid(columns, rows);
});
const inputColRange = document.getElementById("num-col-range");
const inputColNumber = document.getElementById("num-col-number");
inputColNumber.addEventListener("change", () => {
  if (inputColNumber.value > 100) {
    inputColNumber.value = 100;
  }
  inputColRange.value = inputColNumber.value;
});
inputColRange.addEventListener("change", () => {
  inputColNumber.value = inputColRange.value;
});
const inputRowRange = document.getElementById("num-row-range");
const inputRowNumber = document.getElementById("num-row-number");
inputRowNumber.addEventListener("change", () => {
  if (inputRowNumber.value > 100) {
    inputRowNumber.value = 100;
  }
  inputRowRange.value = inputRowNumber.value;
});
inputRowRange.addEventListener("change", () => {
  inputRowNumber.value = inputRowRange.value;
});
const buttonApply = document.getElementById("apply");
buttonApply.addEventListener("click", () => {
  createGrid(inputColNumber.value, inputRowNumber.value);
});
const buttonInk = document.getElementById("ink-button");
buttonInk.addEventListener("click", () => {
  pencil = "ink";
  buttonRainwbow.classList.remove("pencil-selected");
  buttonInk.classList.add("pencil-selected");
});
const buttonRainwbow = document.getElementById("rainbow-button");
buttonRainwbow.addEventListener("click", () => {
  pencil = "rainbow";
  buttonInk.classList.remove("pencil-selected");
  buttonRainwbow.classList.add("pencil-selected");
});
