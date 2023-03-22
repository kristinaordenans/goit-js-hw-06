const formInput = document.querySelector("#validation-input");
formInput.addEventListener('blur', (event) => {
    if(event.target.value.trim().length === Number(formInput.getAttribute('data-length'))) {
        event.target.style.outline = '2px solid #4caf50';
        return;
    } 
    event.target.style.outline = '2px solid #f44336' ;
});