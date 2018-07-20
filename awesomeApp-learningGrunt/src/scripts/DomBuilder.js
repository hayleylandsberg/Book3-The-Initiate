const DomBuilder = (what, where) => {
    document.querySelector(where).appendChild(what)
}

//Below is like a return statement for a module. Exporting a function
module.exports = DomBuilder