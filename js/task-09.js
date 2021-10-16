  const textColor = document.querySelector('.color')
  const buttonChangeColor = document.querySelector('.change-color')
  buttonChangeColor.addEventListener("click", () => {
    textColor.textContent = getRandomHexColor()
    document.body.style.background = getRandomHexColor()
  })

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
