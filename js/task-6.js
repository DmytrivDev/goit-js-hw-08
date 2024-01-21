function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const buttonCr = controls.querySelector('button[data-create]');
const buttonDs = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(event) {
  const min = Number(input.getAttribute('min'));
  const max = Number(input.getAttribute('max'));
  const val = Number(input.value);
  let startSize = 30;

  if(val >= min && val <= max) {
    boxes.innerHTML = '';
    for(let i = 0; i < val; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = startSize +'px';
      box.style.height = startSize +'px';
    
      boxes.append(box);
      startSize += 10;
    }

    input.value = '';
  }
}

function deleteBoxes(event) {  
  boxes.textContent = '';
} 

buttonCr.addEventListener('click', createBoxes);
buttonDs.addEventListener('click', deleteBoxes);