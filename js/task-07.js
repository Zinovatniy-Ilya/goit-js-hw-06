const textRange = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

textRange.addEventListener('input', () => {
    text.style.fontSize = textRange.value + 'px'
})