const inputTextRef = document.querySelector("input");
const spanRef = document.querySelector("span");

inputTextRef.addEventListener("input", onInputCheck);

function onInputCheck(event) {
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
}
