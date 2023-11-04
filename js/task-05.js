const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', () => {
    const input = nameInput.value;
    if (input !== '') {
        nameOutput.textContent = input;
    } else {
        nameOutput.textContent = "Anonymous";
    }
});