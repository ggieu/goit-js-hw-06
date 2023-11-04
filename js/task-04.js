const counterValue = document.querySelector("#counter");
const decrementBtn = document.querySelector(`[data-action = "decrement"]`);
const incrementBtn = document.querySelector(`[data-action = "increment"]`);
const resultBtn = document.querySelector("#value");
let counter = 0;
incrementBtn.addEventListener('click', () => {
counter += 1;
resultBtn.textContent = counter;
});
decrementBtn.addEventListener('click', () => {
    counter -= 1;
    resultBtn.textContent = counter;
    });

    console.log(resultBtn);