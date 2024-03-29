function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('.widget').parentNode;

changeColorBtn.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  colorValue.textContent = hexColor;
  console.log(hexColor);
});
