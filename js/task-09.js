function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChange = document.querySelector(".change-color");
const color = document.querySelector(".color")
const bodyEl = document.querySelector("body")
const backgroundColor = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  color.textContent = color;
}


colorChange.addEventListener("click", backgroundColor);




