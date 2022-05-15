function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// в задании в LMS была прописана функция в конце с .padStart(6, 0) - этот код добавила в начальный файл

const buttonChangeColorRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
let colorTextRef = document.querySelector(".color");

buttonChangeColorRef.addEventListener("click", onChangeButtonClick);

function onChangeButtonClick(event) {
  colorTextRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorTextRef.textContent;
}
