const inputText = document.querySelector("input");
const span = document.querySelector("span");

inputText.addEventListener("input", onInputCheck);

function onInputCheck(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value;
  }
}
