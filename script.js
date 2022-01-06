let userName = document.querySelector('[name = username]')
let eMail = document.querySelector('[name = email]')
let submitBtn = document.querySelector('.send-btn')
let skills = document.querySelectorAll('[name = skills]')
let labels = document.querySelectorAll('label')
let errBox = document.querySelector('.erorr-box')

let skillsVal = []
let errors = []

submitBtn.addEventListener('click', valueValidation)

function valueValidation(e) {
    e.preventDefault()
    let userData = getUserData()

    if (userData.name.length < 3) {
        errors.push('Please enter a valid name.')   
        userName.style.border = "1px solid red"
    }

    if (userData.email.indexOf('@gmail') === -1) {
        errors.push('Please enter a valid email with @gmail.')   
        eMail.style.border = "1px solid red"
    }

    if (skillsVal.length === 0) {
        errors.push('Please add at least one skill.')   

        labels.forEach(function(e) {
            e.style.color = "red"
        })
    }

    if (errors.length !== 0) {
        displayErrors()
    } 
}

function displayErrors() {
    errBox.style.display = "block"

    let text = ""
    
    for (let i = 0; i < errors.length; i++) {
        text += `<p>${errors[i]}</p>`
    }
    errBox.innerHTML = text
}

function getUserData() {
    userNameVal = userName.value
    emailVal = eMail.value
    let genderVal = document.querySelector('[type="radio"]:checked').value
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skillsVal.push(skills[i].value)
        }
    }

    let newUser = {
        name : userNameVal,
        email : emailVal,
        gender : genderVal,
        skills : skillsVal
    }

    return newUser
}


