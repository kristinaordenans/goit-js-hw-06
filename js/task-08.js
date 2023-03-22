const loginForm = document.querySelector('.login-form');
const loginBtn = loginForm.lastElementChild;
const emailInput = loginForm.firstElementChild.firstElementChild;
const passwordInput = loginBtn.previousElementSibling.firstElementChild;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailInput.value === '' || passwordInput.value === '') {
        return alert('Всі поля мають бути заповнені!');
    };
    const user = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    event.target.reset();
    console.log(user);
});


