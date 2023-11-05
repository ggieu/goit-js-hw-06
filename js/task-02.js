const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients");
function markup(element) {
  return element.map(item => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = item;
    return liEl;
  })
};

ulList.append(...markup(ingredients));