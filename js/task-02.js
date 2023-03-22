const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const getIngredient = ingredients.map((element) => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = element;
  return listItem;
});

listEl.append(...getIngredient);
console.log(listEl);

