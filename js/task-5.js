function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const colorOutput = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener('click', changeColor); 

function changeColor(event) {  
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  colorOutput.textContent = newColor;
}
