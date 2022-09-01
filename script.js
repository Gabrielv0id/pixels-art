const section = document.getElementById('color-palette');

function createDivs() {
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.classList = 'color';
    section.appendChild(div);
    div.addEventListener('click', selectColor);
  }
}
createDivs();
const div = document.querySelectorAll('.color');

function createColors() {
  section.firstElementChild.style.backgroundColor = 'black';
  div[1].style.backgroundColor = 'red';
  div[2].style.backgroundColor = 'green';
  div[3].style.backgroundColor = 'blue';
}

createColors();
function createButton() {
  const corpo = document.body;
  const button = document.createElement('button');
  button.id = 'button-random-color';
  button.innerText = 'Cores aleatórias';
  corpo.appendChild(button);
}

createButton();

function randomColors() {
  const colorPallet = [];
  for (let index = 1; index <= 3; index += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div[index].style.backgroundColor = `#${randomColor}`;
    colorPallet.push(div[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPallet));
}
const button = document.getElementById('button-random-color');
button.addEventListener('click', randomColors);

const text = localStorage.getItem('colorPalette');
const saveColor = JSON.parse(text);

if (text !== null) {
  for (let index = 1; index <= 3; index += 1) {
    div[index].style.backgroundColor = saveColor[index - 1];
  }
}

const board = document.createElement('section');
board.id = 'pixel-board';
document.body.appendChild(board);

// for (let index = 0; index < 5; index += 1) {
//   const pixel = document.createElement('div');
//   pixel.className = 'pixel';
//   board.appendChild(pixel);
// }

console.log(document.getElementsByClassName('line'));

function pixelGrade() {
  for (let index = 0; index < 5; index += 1) {
    for (let pixels = 0; pixels < 5; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
      pixel.addEventListener('click', pixelColor);
    }
  }
}
pixelGrade();

section.firstElementChild.classList = 'color selected';

function pixelColor(event) {
  const alvoClicado = event.target;
  const selected = document.querySelector('.selected');
  if (alvoClicado.style.backgroundColor !== selected.style.backgroundColor) {
    alvoClicado.style.backgroundColor = selected.style.backgroundColor;
  }
}

function selectColor(event) {
  const alvoClicado = event.target;
  const selected = document.querySelector('.selected');
  if (alvoClicado.classList.length !== 2) {
    selected.classList = 'color';
    alvoClicado.classList = 'color selected';
  }
}
