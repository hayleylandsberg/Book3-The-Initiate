const data = () => {

const contactDatabase = {}

// Student table in database
contactDatabase.contact = []

// Add students to the student table in the student database
contactDatabase.contact.push({
    name: "Bill Jones",
    number: "310-928-3243",
    address: "423 Main Street Los Angeles, CA 90067"
}, {
    name: "Holly Ronald",
    number: "213-345-3323",
    address: "500 S. Figueroa Street Los Angeles, CA 90007"
}, {
    name: "Mary Louis",
    number: "615-438-0392",
    address: "7867 Meadow Lane Nashville, TN 37215"
}, {
    name: "Cate Wright",
    number: "865-378-4372",
    address: "2233 West Street Austin, TX 48372"
}, {
    name: "John Mercer",
    number: "662-483-0909",
    address: "8898 Prospect Lane Oxford, MS 37707"
})

//localStorage.setItem("contactDatabase", JSON.stringify(contactDatabase))
}

//Saving database to local storage

module.exports = data