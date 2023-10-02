const passwordContainer = document.querySelector('.password')
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-c');


function checkPasswordsMatch() {
    const password = passwordInput.value;
    const passwordCheck = passwordCheckInput.value
    if (password === passwordCheck) {
        passwordContainer.classList.remove('error');
        passwordInput.classList.remove('error');
        passwordCheckInput.classList.remove('error');
    } else {
        passwordContainer.classList.add('error');
        passwordInput.classList.add('error');
        passwordCheckInput.classList.add('error');
    }
}

passwordCheckInput.addEventListener('input', checkPasswordsMatch);
passwordInput.addEventListener('input', checkPasswordsMatch);