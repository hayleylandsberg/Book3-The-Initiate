// // Portfolio (non-enumerable) - Should display the stocks the advisor currently holds
// // Worth (enumerable, read-only)
// // Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// // When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Consider making the portfolio an object itself (if you are feeling brave, try your hand at a Map())

// const financialAdvisor = Object.create(null, {
//     company: {
//         value: "Smith and Jameson, LLC",
//         enumerable: true,
//         writable: true
//     },
//     speciality: {
//         value: "Investments ",
//         enumerable: true,
//         writable: true
//     },
//     name: {
//         value: "Jane Doe",
//         enumerable: true
//     },
//     portfolio: {
//         value: [],
//         enumerable: false
//     },
//     worth: {
//         value: [],
//         enumerable: true,
//         writable: false
//     },
//     purchase: {
//         value: function (symbol, quantity, price) {
//             const portfolio = this.portfolio.push(symbol)
//             const worth = this.worth.push(quantity * price)
//             return portfolio && worth
//         },
//         enumerable: false
//     },
//     sell: {
//         value: function (symbol, quantity, price) {
//             const portfolio = this.portfolio.filter(symbol)
//             const worth = this.worth.filter(quantity * price)
//             return portfolio && worth
//         },
//         enumerable: false
//     }
// })

// // console.log(financialAdvisor.purchase("AMZN", 54, 4))
// // console.log(financialAdvisor.purchase("APL", 72, 65))
// // console.log(financialAdvisor.purchase("SNAP", 4, 200))
// // console.log(financialAdvisor)

// // console.log(financialAdvisor.sell("AMZN", 8, 90))
// // console.log(financialAdvisor)


// // Use document.createElement to build & display an HTML component to display the advisor's name, company, and specialty.
// // Iterate over the advisor's portfolio and use document.createDocumentFragment along with document.createElement to display some HTML components representing each stock owned by the advisor.

// const articleRef = document.querySelector("#ref")

// const spanEl = document.createElement("span")
// spanEl.classList.add("spanEl")
// articleRef.appendChild(spanEl)

// const test = () => {
//     for (let i = 0; i < financialAdvisor.portfolio.length; i++) {
//         const nameEl = document.createElement("p")
//         nameEl.classList.add("stockEl")
//         nameEl.textContent = financialAdvisor.portfolio[i]
//         spanEl.appendChild(nameEl)
//         articleRef.appendChild(spanEl)
//     }
// }

// for (let i = 0; i < financialAdvisor.worth.length; i++) {
//     const worhEl = document.createElement("p")
//     worthEl.classList.add("stockEl")
//     worthEl.textContent = financialAdvisor.worth[i]
//     spanEl.appendChild(worthEl)
//     articleRef.appendChild(spanEl)
// }



// const tickerinputp = document.querySelector("#tickerinputp")
// const quantityinputp = document.querySelector("#quantityinputp")
// const priceinputp = document.querySelector("#priceinputp")
// const tickerinputs = document.querySelector("#tickerinputs")
// const quantityinputs = document.querySelector("#quantityinputs")
// const priceinputs = document.querySelector("#priceinputs")

// $("#stockPurchase").click(function () {
//     console.log(financialAdvisor.purchase(tickerinputp.value, parseInt(quantityinputp.value), parseInt(priceinputp.value)))
//     console.log(financialAdvisor)
//     $( "#articleRef" ).empty();
//     test()
// });

// $("#stockSell").click(function () {
//     console.log(financialAdvisor.sell(tickerinputs.value, parseInt(quantityinputs.value), parseInt(priceinputs.value)))
//     console.log(financialAdvisor)
//     test()
// });


// //When button is clicked, take input values and place values and parameters within to purchase or sell function



//How we did it in class

const financialAdvisor = Object.create(null, {
    company: {
        value: "Smith and Jameson, LLC",
        enumerable: true,
        writable: true
    },
    speciality: {
        value: "Investments ",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Jane Doe",
        enumerable: true
    },
    portfolio: {
        value: [],
    },
    worth: {
        value: function() {
            //HOW TO DO IT WITH A REDUCE FUNCTION
        //     return this.portfolio.reduce(
        //         (currentTotal, nextValue) => {
        //             if (nextValue.purchase) {
        //                 currentTotal += nextValue.price * nextValue.quantity
        //             } else {
        //                 currentTotal -= nextValue.price * nextValue.quantity
        //             }
        //             return currentTotal
        //         }, 0
        //     )
        // }
        let totalPortfolioWorth = 0
            this.portfolio.forEach(
                transaction => {
                    if (transaction.purchase) {
                        totalPortfolioWorth += transaction.price * transaction.quantity
                    } else {
                        totalPortfolioWorth -= transaction.price * transaction.quantity
                    }
                })
                return totalPortfolioWorth
            }
        },
    purchase: {
        value: function(ticker, quantity, price) {
            this.portfolio.push(
                {
                    ticker,
                    quantity,
                    price,
                    purchase: true
                }
            )
        }
    },
    sell: {
        value: function (ticker, quantity, price) {
            this.portfolio.push(
                {
                    ticker,
                    quantity,
                    price,
                    purchase: false
                }
            )
        }
    }
    })
