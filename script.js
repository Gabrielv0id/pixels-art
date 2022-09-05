const section = document.getElementById('color-palette');

function selectColor(event) {
  const alvoClicado = event.target;
  const selected = document.querySelector('.selected');
  if (alvoClicado.classList.length !== 2) {
    selected.classList = 'color';
    alvoClicado.classList = 'color selected';
  }
}

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

function clearButton() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  document.body.appendChild(button);
}

createButton();
clearButton();

function randomColors() {
  const colorPallet = [];
  for (let index = 1; index <= 3; index += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div[index].style.backgroundColor = `#${randomColor}`;
    colorPallet.push(div[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPallet));
}
const buttonColor = document.getElementById('button-random-color');
buttonColor.addEventListener('click', randomColors);

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

section.firstElementChild.classList = 'color selected';

function pixelColor(event) {
  const colorBoardSaved = [];
  const square = document.querySelectorAll('.pixel');
  const alvoClicado = event.target;
  const selected = document.querySelector('.selected');
  if (alvoClicado.style.backgroundColor !== selected.style.backgroundColor) {
    alvoClicado.style.backgroundColor = selected.style.backgroundColor;
  }
  for (let index = 0; index < square.length; index += 1) {
    colorBoardSaved.push(square[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(colorBoardSaved));
}

function pixelGrade() {
  for (let index = 0; index < 5; index += 1) {
    for (let pixels = 0; pixels < 5; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      board.appendChild(pixel);
      pixel.addEventListener('click', pixelColor);
    }
  }
}
pixelGrade();

function clearBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  localStorage.clear('pixelBoard');
  pixelGrade();
}

const Limpar = document.getElementById('clear-board');
Limpar.addEventListener('click', clearBoard);

const pixelSquare = document.querySelectorAll('.pixel');

function savedBoard() {
  if (localStorage.getItem('pixelBoard')) {
    const text2 = localStorage.getItem('pixelBoard');
    const boardSaved = JSON.parse(text2);
    for (let index = 0; index < pixelSquare.length; index += 1) {
      pixelSquare[index].style.backgroundColor = boardSaved[index];
    }
  }
}

savedBoard();
