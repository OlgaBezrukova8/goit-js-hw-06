function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const amountInputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

let lastDivHeight = 20;
let lastDivWidth = 20;

function createBoxes() {
  let amount = Number(amountInputRef.value);

  for (let i = 1; i < amount + 1; i += 1) {
    let height = 10 * i + lastDivHeight;
    let width = 10 * i + lastDivWidth;

    if (i === amount) {
      lastDivHeight = height;
      lastDivWidth = width;
    }

    const createDivRef = document.createElement("div");
    createDivRef.style.width = `${width}px`;
    createDivRef.style.height = `${height}px`;
    createDivRef.style.backgroundColor = getRandomHexColor();

    boxesRef.append(createDivRef);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}