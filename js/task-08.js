//<input type="number" min="0" max="100" step="1" />
//<button type="button" data-action="render">Создать</button>
// <button type="button" data-action="destroy">Очистить</button>
//<div id="boxes"></div>

const inputElement = document.querySelector('input');
console.log(inputElement);
const btnRender = document.querySelector('[data-action="render"]');
console.log(btnRender);
const btnDestroy = document.querySelector('[data-action="destroy"]');
console.log(btnDestroy);
const newElement = document.querySelector('#boxes')
console.log(newElement);

