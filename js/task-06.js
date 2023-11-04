const input = document.querySelector('#validation-input');
const correctLength = Number(input.dataset.length); 
console.log(correctLength);

input.addEventListener('blur', checkLength);

function checkLength(event) {
    const inputLength = event.currentTarget.value.length;
    console.log(inputLength);
    if (inputLength === correctLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};