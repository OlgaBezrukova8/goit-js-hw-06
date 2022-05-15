const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", onChangeText); // вместо input можно поставить событие change, но будет не плавный переход при перетягивании ползунка

function onChangeText(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
