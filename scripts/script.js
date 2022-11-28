'use strict'

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btnRegistration = document.querySelector('#button__registration')

let emailError = document.querySelector('#emailError')
let passwordError = document.querySelector('#passwordError')
let rulesError = document.querySelector('#rulesError')

let emailErrorStar = document.querySelector('.window__email_star')
let passwordErrorStar = document.querySelector('.window__password_star')
let rulesErrorStar = document.querySelector('.window__rules_star')

let emailErrorTitle = document.querySelector('.window__email')
let passwordErrorTitle = document.querySelector('.window__pass')
let checkboxError = document.querySelector('#custom-checkbox')
let labelError = document.querySelector('#label')

let emailResult = ''
let passwordResult = ''

email.addEventListener('input', (event) => {
    emailResult = event.target.value
})

password.addEventListener('input', (event) => {
    passwordResult = event.target.value
})


btnRegistration.addEventListener('click', (event) => {
    event.preventDefault()

    function validateEmail(emailResult) {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailResult).toLowerCase());
    }

    let checkmail = validateEmail(emailResult)

    if (emailResult.length === 0) {
        emailError.textContent = 'Поле обязательно для заполнения'
        email.style.borderColor = '#CB2424'
        emailErrorStar.style.color = '#CB2424'
        emailErrorTitle.style.color = '#CB2424'
    } else if (checkmail === false) {
        emailError.textContent = 'Email невалидый'
        email.style.borderColor = '#CB2424'
        emailErrorStar.style.color = '#CB2424'
        emailErrorTitle.style.color = '#CB2424'
    }

    if (passwordResult.length === 0) {
    passwordError.textContent = 'Поле обязательно для заполнения';
    password.style.borderColor = '#CB2424'
    passwordErrorStar.style.color = '#CB2424'
    passwordErrorTitle.style.color = '#CB2424'
    } else if (passwordResult.length < 8) {
    passwordError.textContent = 'Пароль должен содержать как минимум 8 символов'
    password.style.borderColor = '#CB2424'
    passwordErrorStar.style.color = '#CB2424'
    passwordErrorTitle.style.color = '#CB2424'
    }

    if (checkboxError.checked) {
    } else {
        rulesError.textContent = 'Поле обязательно для заполнения'
        checkboxError.style.borderColor = '#CB2424'
        labelError.style.borderColor = '#CB2424'
        rulesErrorStar.style.color = '#CB2424'
    }

    function makeUser(emailResult, passwordResult) {
        return {
          email: emailResult,
          password: passwordResult
        };
    }

    let user = makeUser(emailResult, passwordResult);

    localStorage.setItem('user', JSON.stringify(user))

    console.log('Email:', emailResult)
    console.log('Password:', passwordResult)
})