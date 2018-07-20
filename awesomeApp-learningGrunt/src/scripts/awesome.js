/* Modules:
1. Creating Fragments
2. Creating components with factories
3. Adding event listeners to components
4. Adding components to DOM
5. Clearing fields
*/
const DomBuilder = require("./DomBuilder")
const CardFactory = require("./CardFactory")
const InputFieldFactory = require("./InputFieldFactory")
const ButtonFactory = require("./ButtonFactory")


//Final output DOM component reference
const output = document.querySelector(".output");

//Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment();

const createCardButton = ButtonFactory("button--submit", "Create Card", function () {
    const userEntry = createTextInput.value
    output.appendChild(CardFactory("card", userEntry))
    createTextInput.value = ""
})
const createTextInput = InputFieldFactory("input--text", "Enter card text here", "text")

fragment.appendChild(createTextInput)
fragment.appendChild(createCardButton)

//Input onto the DOM
DomBuilder(fragment, ".output")