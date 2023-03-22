const formInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

formInput.addEventListener('input', (event) => {
    spanText.style.fontSize = event.currentTarget.value + "px";
});