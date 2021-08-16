const nameInput = document.querySelector('#name-input');
console.log(nameInput);

const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);


nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    const input = event.currentTarget;
    nameOutput.textContent = input.value ? input.value : 'незнакомец'
}