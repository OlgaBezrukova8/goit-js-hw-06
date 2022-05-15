const inputRef = document.querySelector("input");
const inputLengthRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener("blur", onRemoweInputBlur);

function onRemoweInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputLengthRef.getAttribute("data-length"))
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
  console.log(inputRef.classList);
}
