const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItemCategoryOfIngredients = ingredients.map((el) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;

  return item;
});

const listIngredients = document.querySelector("#ingredients");
listIngredients.append(...createItemCategoryOfIngredients);
