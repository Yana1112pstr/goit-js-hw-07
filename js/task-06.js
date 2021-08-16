const inputText = document.querySelector('#validation-input');
console.log(inputText);

const dataLengthEl = Number(inputText.dataset.length);
console.log(dataLengthEl);

inputText.addEventListener("blur", onInputBlur);

function onInputBlur () {
    let value = inputText.value.length;
    if (value !== dataLengthEl) {
        inputText.classList.add("invalid")
        inputText.classList.remove("valid")
        return;
    }
inputText.classList.add("valid");
inputText.classList.remove("invalid")
};
