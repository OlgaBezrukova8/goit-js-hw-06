const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputRef.addEventListener("input", onChangeText); // вместо input можно поставить событие change, но будет не плавный переход при перетягивании ползунка

function onChangeText(event) {
  spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
}
