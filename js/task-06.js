const formInput = document.querySelector("#validation-input");
const dataLength = Number(formInput.getAttribute('data-length'));

// console.log(formInput)

formInput.addEventListener('blur', (event) => {
    if (event.target.value.length === dataLength) {
        formInput.classList.add('valid')
        formInput.classList.remove('invalid')
    } else if (event.target.value.length === 0) {
        formInput.classList.remove('valid')
        formInput.classList.remove('invalid')
    } else {
        formInput.classList.add('invalid')
        formInput.classList.remove('valid')
    }
});
