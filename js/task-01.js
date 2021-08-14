const elemCategories = document.querySelector('#categories');
//console.log(elemCategories);

const elemItems = elemCategories.querySelectorAll('.item');
console.log(`В списке ${elemItems.length} категории`);
//console.log(elemItems);

const titles = [];
elemItems.forEach(elem => {
console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
console.log('Количество элементов : ', elem.getElementsByTagName('li').length);
});
