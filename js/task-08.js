const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const formElement = event.currentTarget.elements
    
    const email = formElement.email.value
    const password = formElement.password.value 
    
    if(email.length === 0 || password.length === 0) {
        alert("все поля должны быть заполнены")
    } else {
        const formValue = {
            email: email,
            password: password
        }
        console.log(formValue);
    }
    form.reset()
}