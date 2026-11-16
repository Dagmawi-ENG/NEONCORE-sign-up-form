const sign_up =
document.getElementById("signup-form")

const callsign =
document.getElementById("CALLSIGN")

const email =
document.getElementById("EMAIL")

const password = 
document.getElementById("password")

const confirm_password = 
document.getElementById("confirm-password")

const check_box = 
document.getElementById("term")

const success_message = 
document.getElementById("success-message")

const callsign_error = 
document.getElementById("callsign-error")

const email_error = 
document.getElementById("email-error")

const password_error = 
document.getElementById("password-error")

const term_error = 
document.getElementById("term-error")

const confirm_password_error = 
document.getElementById("confirm-password-error")

function callsign_validation() {
 const user_callsign = callsign.value.trim();
 const pattern = /^[A-Za-z]+_[0-9]+$/;

 if (user_callsign === ""){
    callsign_error.textContent= "invalid callsign"
    callsign.classList.add("invalid")
     return false
    }

else if (user_callsign.length < 3 || user_callsign.length > 20 ){
    callsign_error.textContent = "callsign must be greater than 3 and less than or equal 20"
    callsign.classList.add("invalid")
    return false
}


else if (pattern.test(user_callsign) === false){
   callsign_error.textContent = "callsign must contain A-Za-z0-9_-"
   callsign.classList.add("invalid")
   return false
}

else {
    callsign_error.textContent = ""
    callsign.classList.remove("invalid")
    return true
}

}

function email_validation(){
const user_email = email.value.trim()

const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email_pattern.test(user_email)){
    email_error.textContent = "invalid email"
    email.classList.add("invalid")
    return false
}

else{
    email_error.textContent = ""
    email.classList.remove("invalid")
    return true
}

}

function password_validation() {
const user_password = password.value

if(user_password.length < 8){
    password_error.textContent = "password must contain atleast 8 charactetr"
    password.classList.add("invalid")
    return false
}

else{
    password_error.textContent = ""
    password.classList.remove("invalid")
    return true 
}

}

function confirm_password_validation(){
const user_confirm_password = confirm_password.value

const user_password = password.value


if (user_confirm_password !== user_password) {
    confirm_password_error.textContent = "password must be same"
    confirm_password.classList.add("invalid")
    return false
}
else{
    confirm_password_error.textContent = ""
    confirm_password.classList.remove("invalid")
    return true
}

}

function term_validation(){
const user_term = check_box.checked

if (!user_term){
    term_error.textContent = "you must agree with the term"
    check_box.classList.add("invalid")
    return false 
}

else {
      term_error.textContent = ""
      check_box.classList.remove("invalid")
      return true
}

}

function reset_error(){
    callsign_error.textContent = ""

    email_error.textContent = ""

    password_error.textContent = ""

    confirm_password_error.textContent = ""

    term_error.textContent = ""

    callsign.classList.remove("invalid")

    email.classList.remove("invalid")

    password.classList.remove("invalid")

     confirm_password.classList.remove("invalid")

      check_box.classList.remove("invalid")
}
 
sign_up.addEventListener("submit", (event) => {
 event.preventDefault()

const callsign_valid = callsign_validation()

const email_valid = email_validation()

const password_valid = password_validation()

const confirm_password_valid = confirm_password_validation()

const term_valid = term_validation()

if (callsign_valid && email_valid && password_valid && confirm_password_valid && term_valid){
    const form_data = new FormData(sign_up);

const callsign_data = form_data.get("CALLSIGN")

const email_data = form_data.get("EMAIL")

const term_data = form_data.get("term")

console.log(callsign_data)

console.log(email_data)

sign_up.reset()

reset_error()

console.log(term_data)
   
success_message.textContent = "WELCOME TO NEONCORE!"

}

})

sign_up.addEventListener("input", (event) => {
    if (event.target === callsign) {
        callsign_validation()
     success_message.textContent = ""
}

else if (event.target === email) {
    email_validation()
     success_message.textContent = ""
}

else if (event.target === password) {
     password_validation()
     success_message.textContent = ""
     
 if (confirm_password.value !== password.value){
  confirm_password_validation()
}
}

else if (event.target === confirm_password) {
        confirm_password_validation()
     success_message.textContent = ""
}

})

sign_up.addEventListener("change", (event) => {
    if(event.target === check_box){
     term_validation()
    success_message.textContent = ""
    }
})
