const getData = require("./Database")
const data = require("./storage")


const output = document.querySelector(".output");

const showContact = () => {
    data()
    let contactDatabase = getData()
    contactDatabase.contact.forEach(element => {
        let row = document.createElement("section")
        row.className = "section--contact"
        output.appendChild(row)
        const contactName = document.createElement("h2")
        contactName.classList = "contact-name"
        contactName.textContent = element.name
        row.appendChild(contactName)
        const contactNumber = document.createElement("p")
        contactNumber.classList = "contact-number"
        contactNumber.textContent = element.number
        row.appendChild(contactNumber)
        const contactAddress = document.createElement("p")
        contactAddress.classList = "contact-address"
        contactAddress.textContent = element.address
        row.appendChild(contactAddress)
    });
}

module.exports = showContact