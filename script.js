const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const emailRegex = /\w+@[\w-]+\.com/;
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!firstNameInput.value) {
        firstNameInput.value = "";
        firstNameInput.classList.add('error');
        firstNameInput.placeholder = "";
        firstNameInput.style.backgroundImage = "url('img/icon-error.svg')";
        firstNameInput.style.borderColor = "hsl(0, 100%, 74%)";
        firstNameError.innerHTML = `<em>First Name</em> cannot be empty`;
        return;
    }
    firstNameInput.classList.remove("error");
    resetError();
    if (!lastNameInput.value) {
        lastNameInput.value = "";
        lastNameInput.classList.add('error');
        lastNameInput.placeholder = "";
        lastNameInput.style.backgroundImage = "url('img/icon-error.svg')";
        lastNameInput.style.borderColor = "hsl(0, 100%, 74%)";
        lastNameError.innerHTML = `<em>Last Name</em> cannot be empty`;
        return;
    }
    lastNameInput.classList.remove('error');
    resetError();
    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        emailInput.value = "";
        emailInput.classList.add('error');
        emailInput.placeholder = "email@example/com";
        emailInput.style.borderColor = "hsl(0, 100%, 74%)";
        emailInput.style.backgroundImage = "url('img/icon-error.svg')";
        emailError.innerHTML = `Look like this is not an <em>email</em>`;
        return;
    }
    emailInput.classList.remove('error');
    resetError();
    if (!passwordInput.value) {
        passwordInput.value = "";
        passwordInput.classList.add('error');
        passwordInput.placeholder = "";
        passwordInput.style.borderColor = "hsl(0, 100%, 74%)";
        passwordInput.style.backgroundImage = "url('img/icon-error.svg')";
        passwordError.innerHTML = `<em>Password</em> cannot be empty`;
        return;
    }
    passwordInput.classList.remove('error');
    resetError();
    alert('CONGRATULATION! Your form was sent to our data. Thank you for spending time.');
    resetForm();
    return;
})
const resetForm = () => {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}
const resetError = () => {
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    firstNameInput.style.borderColor = "hsl(246, 25%, 77%)";
    lastNameInput.style.borderColor = "hsl(246, 25%, 77%)";
    emailInput.style.borderColor = "hsl(246, 25%, 77%)";
    passwordInput.style.borderColor = "hsl(246, 25%, 77%)";

    firstNameInput.style.backgroundImage = "none";
    lastNameInput.style.backgroundImage = "none";
    emailInput.style.backgroundImage = "none";
    passwordInput.style.backgroundImage = "none";
}