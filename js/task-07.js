const inputRange = document.querySelector('#font-size-control');
console.log(inputRange);

const text = document.querySelector('#text');
console.log(text);

inputRange.addEventListener('input', onInputRange);

function onInputRange (event) {
const inputEl = event.target.value;

text.style.fontSize = `${inputEl}%`
};