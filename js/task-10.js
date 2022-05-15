function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const amountInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(amountInput.value);

  for (let i = 0; i < amount; i += 1) {
    let height = 30;
    let width = 30;

    height += 10 * i;
    width += 10 * i;

    const createDiv = document.createElement("div");
    createDiv.style.width = `${width}px`;
    createDiv.style.height = `${height}px`;
    createDiv.style.backgroundColor = getRandomHexColor();

    boxes.append(createDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
