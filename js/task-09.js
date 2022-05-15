function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// в задании в LMS была прописана функция в конце с .padStart(6, 0) - этот код добавила в начальный файл

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
let colorText = document.querySelector(".color");

buttonChangeColor.addEventListener("click", onChangeButtonClick);

function onChangeButtonClick(event) {
  colorText.textContent = getRandomHexColor();
  body.style.backgroundColor = colorText.textContent;
}
