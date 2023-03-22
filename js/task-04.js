let counterValue = 0;


const number = document.querySelector("#value");
const decrementBtn = number.previousElementSibling;
const incrementBtn = number.nextElementSibling;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    number.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
});
