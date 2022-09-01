function createColors() {
  const section = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.classList = 'color';
    section.appendChild(div);
    if (section.firstElementChild.style.backgroundColor !== 'black') {
      section.firstElementChild.style.backgroundColor = 'black';
    } else if (index === 1) {
      section.children[index].style.backgroundColor = 'red';
    } else if (index === 2) {
      section.children[index].style.backgroundColor = 'purple';
    } else {
      section.children[index].style.backgroundColor = 'blue';
    }
  }
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

const div = document.querySelectorAll('.color');

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
