const ButtonFactory = (classList, textContent, eventListener) => {
    const theButton = document.createElement("button")
    theButton.classlist = classList
    theButton.textContent = textContent
    theButton.addEventListener("click", eventListener)
    return theButton
}

module.exports = ButtonFactory