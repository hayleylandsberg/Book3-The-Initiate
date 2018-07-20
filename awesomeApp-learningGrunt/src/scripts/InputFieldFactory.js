const InputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.classlist = classList
    inputField.setAttribute("type", type)
    inputField.placeholder = defaultPlaceholderText
    return inputField
}

module.exports = InputFieldFactory