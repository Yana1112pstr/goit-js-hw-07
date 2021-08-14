const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

//Вариант с 'map':

const allIngred = ingredients.map(ingredient => {
    const newTag = document.createElement('li');
    newTag.textContent = ingredient;
return newTag;
});
const newElem = document.querySelector('#ingredients')
newElem.append(...allIngred);
console.log(newElem);

//Вариант с циклом 'for':

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
// const oneIngred = ingredients[i];
// const newTag = document.createElement('li')
// newTag.textContent = oneIngred;
// elements.push(newTag);
// };
// const newElem = document.querySelector('#ingredients')
// newElem.append(...elements);
// console.log(newElem);

