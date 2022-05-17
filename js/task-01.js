const amountOfCategoryRef = [...document.querySelectorAll(".item")];
console.log("Number of categories:", amountOfCategoryRef.length);

const nameAndAmountOfCategories = amountOfCategoryRef.forEach(
  (name) =>
    console.log("Category:", name.firstElementChild.textContent) +
    console.log("Elements:", name.lastElementChild.children.length)
);
