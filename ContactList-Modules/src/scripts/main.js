const DomBuilder = require("./DomBuilder")
const getData = require("./Database")
const showContact = require("./showContact")
const data = require("./storage")

//Final output DOM component reference
const output = document.querySelector(".output");
const nameInput = document.querySelector(".inputName")
const numberInput = document.querySelector(".inputNumber")
const addressInput = document.querySelector(".inputAddress")
const submitButton = document.querySelector(".submitButton")

showContact()

const addContact = () => {
    let contactDatabase = getData()
    submitButton.addEventListener("click", function () {
        const inputContact = {name: nameInput.value, number: numberInput.value, address: addressInput.value};
        console.log(inputContact)
        contactDatabase.contact.push(inputContact)
        localStorage.setItem("contactDatabase", JSON.stringify(contactDatabase))

        let row = document.createElement("section")
        row.className = "section--contact"
        output.appendChild(row)
        const contactName = document.createElement("h2")
        contactName.classList = "contact-name"
        contactName.textContent = nameInput.value
        row.appendChild(contactName)
        const contactNumber = document.createElement("p")
        contactNumber.classList = "contact-number"
        contactNumber.textContent = numberInput.value
        row.appendChild(contactNumber)
        const contactAddress = document.createElement("p")
        contactAddress.classList = "contact-address"
        contactAddress.textContent = addressInput.value
        row.appendChild(contactAddress)
    })

}
addContact()

// - A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

// DONE - A Contact component that displays a person's name, phone number, and address.

// - A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

// DONE - A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

// - In main.js, import the ContactList component and the ContactForm component.

// DONE - The user should see the contact form at the top of the view, and the list of contacts underneath it.