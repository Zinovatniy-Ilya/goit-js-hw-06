const validationInput = document.getElementById('validation-input');
const dataLength = Number(validationInput.getAttribute('data-length'));
validationInput.addEventListener('blur', handleClickInput);
function handleClickInput() {
    if (validationInput.value.length === dataLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}
