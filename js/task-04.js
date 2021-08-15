const btnDecrement = document.querySelector('button[data-action="decrement"]')
console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]')
console.log(btnIncrement);

const value = document.querySelector('#value')
console.log(value);

let counter = 0;

btnDecrement.addEventListener('click', decrement)
btnIncrement.addEventListener('click', increment)

function decrement() {
    counter -= 1;
    value.textContent = counter;
}

function increment() {
    counter += 1;
    value.textContent = counter;
}