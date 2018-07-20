const CardFactory = (classList, textContent) => {
    const theCard = document.createElement("div")
    theCard.classlist = classList
    theCard.textContent = textContent
    return theCard
}

module.exports = CardFactory