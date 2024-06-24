function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const nameOfColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

const handleChangeColor = () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    nameOfColor.textContent = color;
};

changeColorButton.addEventListener('click', handleChangeColor);