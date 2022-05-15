const form = document.querySelector("form");
form.addEventListener("submit", onButtonLoginSubmit);

function onButtonLoginSubmit(event) {
  event.preventDefault();
  let obj = {};

  const formInputs = [...event.target.elements].filter(
    (input) => input.tagName === "INPUT"
  );

  const isValidForm = formInputs.some((input) => input.value === "");

  if (isValidForm) {
    alert("All fields must be completed!");
  }

  formInputs.forEach((el) => (obj[el.getAttribute("type")] = el.value));
  console.log(obj);

  form.reset();
}
