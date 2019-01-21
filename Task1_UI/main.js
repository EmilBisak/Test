let firstName = document.querySelector("#first-name")
let successFirstName = document.querySelector(".sa-success.first-name")
let numberFirstName = document.querySelector(".sa-placeholder.first-name span")
let successLineFirstName = document.querySelectorAll(".sa-icon.sa-success.first-name")
let lineFirstName = document.querySelectorAll(".sa-line.first-name")

let lastName = document.querySelector("#last-name")
let successLastName = document.querySelector(".sa-success.last-name")
let numberLastName = document.querySelector(".sa-placeholder.last-name span")
let successLineLastName = document.querySelectorAll(".sa-icon.sa-success.last-name")
let lineLastName = document.querySelectorAll(".sa-line.last-name")

let email = document.querySelector("#email")
let successEmail = document.querySelector(".sa-success.email")
let numberEmail = document.querySelector(".sa-placeholder.email span")
let successLineEmail = document.querySelectorAll(".sa-icon.sa-success.email")
let lineEmail = document.querySelectorAll(".sa-line.email")

let radioInput = document.querySelectorAll("input[type='radio']")
let successRadio = document.querySelector(".sa-success.radio")
let numberRadio = document.querySelector(".sa-placeholder.radio span")
let successLineRadio = document.querySelectorAll(".sa-icon.sa-success.radio")
let lineRadio = document.querySelectorAll(".sa-line.radio")

let percentageCircle = document.querySelector(".c100")
let percentageSpan = document.querySelector("span.font-size-super")
let checkedInput = new Set();



firstName.focus()
lineFirstName.forEach(e => e.style.display = "none")
successLineFirstName.forEach(e => e.style.borderColor = "#fff")

lineLastName.forEach(e => e.style.display = "none")
successLineLastName.forEach(e => e.style.borderColor = "#fff")

lineEmail.forEach(e => e.style.display = "none")
successLineEmail.forEach(e => e.style.borderColor = "#fff")

lineRadio.forEach(e => e.style.display = "none")
radioInput.forEach(e => e.checked = false)
successLineRadio.forEach(e => e.style.borderColor = "#fff")

const animationHandlerFirst = () => {
    
    if (firstName.value.length > 0) {
        successFirstName.classList.add("hide");
        numberFirstName.classList.add("hide");
        lineFirstName.forEach(e => e.style.display = "block")
        successLineFirstName.forEach(e => e.style.borderColor = "rgb(33, 150, 243)")
        checkedInput.add(firstName)
        percentageCircle.classList.add(`p${checkedInput.size ? checkedInput.size * 25 : checkedInput.size}`)
    } else {
        lineFirstName.forEach(e => e.style.display = "none")
        numberFirstName.classList.remove("hide");
        checkedInput.delete(firstName)
        percentageCircle.classList.remove(`p${checkedInput.size ? checkedInput.size * 25 + 25 : checkedInput.size + 25}`)
    }
    
    percentageSpan.innerHTML = checkedInput.size ? checkedInput.size * 25 + "%" : checkedInput.size + "%";
    setTimeout(function () {
        successFirstName.classList.remove("hide");
    }, 10);
}


const animationHandlerLast = () => {
    if (lastName.value.length > 0) {
        successLastName.classList.add("hide");
        numberLastName.classList.add("hide");
        lineLastName.forEach(e => e.style.display = "block")
        successLineLastName.forEach(e => e.style.borderColor = "rgb(33, 150, 243)")
        checkedInput.add(lastName)
        percentageCircle.classList.add(`p${checkedInput.size ? checkedInput.size * 25 : checkedInput.size}`)
    } else {
        lineLastName.forEach(e => e.style.display = "none")
        numberLastName.classList.remove("hide");
        checkedInput.delete(lastName)
        percentageCircle.classList.remove(`p${checkedInput.size ? checkedInput.size * 25 + 25 : checkedInput.size + 25}`)
    }
    
    percentageSpan.innerHTML = checkedInput.size ? checkedInput.size * 25 + "%" : checkedInput.size + "%";
    setTimeout(function () {
        successLastName.classList.remove("hide");
    }, 10);
}


const animationHandlerEmail = () => {
    if (email.value.length > 0 && email.value.includes("@" && ".com")) {
        successEmail.classList.add("hide");
        numberEmail.classList.add("hide");
        lineEmail.forEach(e => e.style.display = "block")
        successLineEmail.forEach(e => e.style.borderColor = "rgb(33, 150, 243)")
        checkedInput.add(email)
        percentageCircle.classList.add(`p${checkedInput.size ? checkedInput.size * 25 : checkedInput.size}`)
    } else {
        lineEmail.forEach(e => e.style.display = "none")
        numberEmail.classList.remove("hide");
        checkedInput.delete(email)
        percentageCircle.classList.remove(`p${checkedInput.size ? checkedInput.size * 25 + 25 : checkedInput.size + 25}`)
    }
    
    percentageSpan.innerHTML = checkedInput.size ? checkedInput.size * 25 + "%" : checkedInput.size + "%";
    setTimeout(function () {
        successEmail.classList.remove("hide");
    }, 10);
}


function animationHandlerRadio() {
    radioInput.forEach(e => e.checked = false);
    this.checked = true;
    
    if (this.checked) {
        successRadio.classList.add("hide");
        numberRadio.classList.add("hide");
        lineRadio.forEach(e => e.style.display = "block")
        successLineRadio.forEach(e => e.style.borderColor = "rgb(33, 150, 243)")
        checkedInput.add(radioInput)
        percentageCircle.classList.add(`p${checkedInput.size ? checkedInput.size * 25 : checkedInput.size}`)
    } else {
        lineRadio.forEach(e => e.style.display = "none")
        numberRadio.classList.remove("hide");
        checkedInput.delete(radioInput)
        percentageCircle.classList.remove(`p${checkedInput.size ? checkedInput.size * 25 + 25 : checkedInput.size + 25}`)
    }
    
    percentageSpan.innerHTML = checkedInput.size ? checkedInput.size * 25 + "%" : checkedInput.size + "%";
    setTimeout(function () {
        successRadio.classList.remove("hide");
    }, 10);
}



firstName.addEventListener("blur", animationHandlerFirst)
lastName.addEventListener("blur", animationHandlerLast)
email.addEventListener("blur", animationHandlerEmail)
radioInput.forEach(e => e.addEventListener("click", animationHandlerRadio))


