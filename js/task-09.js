function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgcNameRef = document.querySelector(".color");
const changeRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");



function changeBtnClick() {
  const bgc = getRandomHexColor();
  bodyRef.style.backgroundColor = bgc;
  bgcNameRef.textContent = bgc;
}

changeRef.addEventListener("click", changeBtnClick);
