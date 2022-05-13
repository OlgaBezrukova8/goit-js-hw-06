let counterValue = 0;

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");

decrementBtnRef.addEventListener("click", onDecrementButtonClick);
incrementBtnRef.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
