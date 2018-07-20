const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const fragment = document.createDocumentFragment()

for (let key in financialAdvisor) {
    const sectionComponent = document.createElement("section")
    sectionComponent.textContent = `${capitalize(key)}: ${financialAdvisor[key]}`
    fragment.appendChild(sectionComponent)
}

const tickers = {}

document.querySelector("#ref").appendChild(fragment)

financialAdvisor.portfolio.forEach(
    transaction => {
        if (!(transaction.ticker in tickers)) {
            tickers[transaction.ticker] = transaction.price * transaction.quantity
        } else {
            if (transaction.purchase) {
                tickers[transaction.ticker] += transaction.price * transaction.quantity
            } else {
                tickers[transaction.ticker] -= transaction.price * transaction.quantity
            }
        }
    });

console.log(tickers)


const articleRef = document.querySelector("#ref")


    const spanEl = document.createElement("span")
    spanEl.classList.add("spanEl")
    articleRef.appendChild(spanEl)

    for (let key in tickers) {
    const nameEl = document.createElement("p")
    nameEl.classList.add("stockEl")
    nameEl.textContent = `I own ${key} stock worth $${tickers[key].toFixed(2)}`
    spanEl.appendChild(nameEl)
    articleRef.appendChild(spanEl)
    }


console.log(financialAdvisor.portfolio)