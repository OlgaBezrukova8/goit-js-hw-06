function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const amountInputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(amountInputRef.value);

  for (let i = 0; i < amount; i += 1) {
    let height = 30;
    let width = 30;

    height += 10 * i;
    width += 10 * i;

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
