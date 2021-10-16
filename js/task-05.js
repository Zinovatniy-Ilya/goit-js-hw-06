const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
nameInput.addEventListener("input", event => {
    if(nameInput.value.length === 0) {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = event.target.value
    }
})