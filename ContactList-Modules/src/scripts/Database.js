const getData = () => {
    let contactDatabase = JSON.parse(localStorage.getItem("contactDatabase"))
    return contactDatabase
}

module.exports = getData