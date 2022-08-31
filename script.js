function createColors() {
  const section = document.getElementById('color-palette');
  const firstColor = 'black';
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.classList = 'color';
    section.appendChild(div);
    if (section.firstElementChild.style.backgroundColor !== firstColor) {
      section.firstElementChild.style.backgroundColor = firstColor;
    }
  }
  console.log(section);
}
createColors();
