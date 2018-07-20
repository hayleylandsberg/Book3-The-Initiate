/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const activateFlight = document.querySelector("#activate-flight");
const activateMindReading = document.querySelector("#activate-mindreading");
const activatexray = document.querySelector("#activate-xray");
const activateAll = document.querySelector("#activate-all");
const deactivateAll = document.querySelector("#deactivate-all");

function toggleClass (newClass) {
    guineaPig.classList.toggle(newClass)
    console.log("guineaPig.classList", guineaPig.classList)
  }


// function removeClass (idSelector, newClass) {
//     document.querySelector(idSelector).classList.remove(newClass)
// }

// function addClass (idSelector, newClass) {
//     document.querySelector(idSelector).classList.add(newClass)
// }

function changeClass (idSelector, item1, item2) {
    document.querySelector(idSelector).classList.replace(item1, item2)
}

activateFlight.addEventListener("click",function() {
    changeClass("#flight", "disabled", "enabled")
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


activateMindReading.addEventListener("click",function() {
    changeClass("#mindreading", "disabled", "enabled")
})

activatexray.addEventListener("click",function() {
    changeClass("#xray", "disabled", "enabled")
})


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

function enableAll () {
    changeClass("#flight", "disabled", "enabled")
    changeClass("#mindreading", "disabled", "enabled")
    changeClass("#xray", "disabled", "enabled")
}

activateAll.addEventListener("click", function() {
    enableAll()
})

function disableAll () {
    changeClass("#flight", "enabled", "disabled")
    changeClass("#mindreading", "enabled", "disabled")
    changeClass("#xray", "enabled", "disabled")
}

deactivateAll.addEventListener("click", function() {
    disableAll()
})


