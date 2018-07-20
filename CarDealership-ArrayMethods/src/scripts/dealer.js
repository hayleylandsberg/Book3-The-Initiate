// Total profit for 2017
const profit = carData.map(function (element) {
    const profitArray = element.gross_profit
    return profitArray
})
 
let totalProfit = profit.reduce(
    (currentTotal, next) => currentTotal + next)
    .toLocaleString('en-us', {style: 'currency', currency: 'USD'})
//ANSWER
console.log(totalProfit)


// In which month did they sell the most cars?

//WAY I DID IT
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = carData.map(function (element) {
    dateArray = element.purchase_date
    return dateArray
})
console.log(date)

let allMonths = []
for (let i = 0; i < date.length; i++) {
    dateRef = new Date(date[i]).getMonth()
    allMonths.push(monthNames[dateRef])
}

let monthOrder = allMonths.sort()
console.log(monthOrder)

let current = null;
let cnt = 0;
let monthCount = []

for (let i = 0; i < monthOrder.length; i++) {
    if (monthOrder[i] != current) {
        if (cnt > 0) {
            monthCount.push(`${cnt}: ${current}`)
        }
        current = monthOrder[i];
        cnt = 1;
    } else {
        cnt++;
    }
}
if (cnt > 0) {
    monthCount.push(`${cnt}: ${current}`);
}

console.log(monthCount.sort())
//ANSWER
console.log(`We sold the most cars in ${monthCount[monthCount.length - 1]} and ${monthCount[monthCount.length - 1]}`)

//WHAT WE LEARNED IN CLASS
// const ledger = sales.reduce((ledger, sale) => {
//     const month = new Date(sale.purchase_date).getMonth()
//     if (!ledger.has(month)) {
//         ledger.set(month, 1)
//     } else {
//         ledger.set(month, ledger.get(month) + 1)
//     }
//     return ledger
// }, new Map())

// console.log(ledger)

//const arrayOfSales = arrayOfSales.sort((c,p) => p[1] - c[1])
//const topSales = sortedArrayOfSales.shift()
//console.log(topSales)


// Which salesperson sold the most cars?

const salesPerson = carData.map(function (element) {
    salesArray = element.sales_agent
    return salesArray
})

let salesName = []
for (let i = 0; i < salesPerson.length; i++) {
    salesName.push(salesPerson[i].first_name + " " + salesPerson[i].last_name)
}
const salesPersonOrder = salesName.sort()
console.log(salesPersonOrder)

let personCount = []
let pcnt = 0
let pcurrent = null

for (let i = 0; i < salesPersonOrder.length; i++) {
    if (salesPersonOrder[i] != pcurrent) {
        if (pcnt > 0) {
            personCount.push(`{${pcnt}: ${pcurrent}`)
        }
        pcurrent = salesPersonOrder[i];
        pcnt = 1;
    } else {
        pcnt++;
    }
}
if (pcnt > 0) {
    personCount.push(`${pcnt}: ${pcurrent}`);
}
console.log(personCount.sort())
//ANSWER
console.log(`${personCount[personCount.length - 1]} sold the most cars!`)



// Which salesperson made the most profit?

// const grossProfit = carData.map(function (element) {
//     grossArray = element.gross_profit
//     return grossArray
// })

// let profitandsales = []
// for (let i = 0; i < grossProfit.length; i++) {
//     profitandsales.push(`${salesName[i]} ${grossProfit[i]}`)
// }
// console.log(profitandsales)


const reps = sales.reduce((l, s) => {
    const key = `${s.sales_agent.first_name} ${s.sales_agent.last_name}`

    if (!l.has(key)) {
        l.set(key, {sales:1, profit: s.gross_profit})
    } else {
        let current = l.get(key)
        l.set(key, { sales: current.sales+1, profit: current.profit + s.gross_profit })
    }
    return l
}, new Map())
// reps

const repSalesArray = [...reps.entries()]

const sortedSales = repSalesArray.sort((c, p) => p[1].profit - c[1].profit)
sortedSales

const topSales = sortedSales.shift()
topSales

const sortedProfit = repSalesArray.sort((c, p) => p[1].sales - c[1].sales)
const topProfit = sortedProfit.shift()
const output = `${topProfit[0]} sold ${topProfit[1].sales} cars for the top profit of ${topProfit[1].profit.toLocaleString("en-us",  { style: "currency", currency: "USD" })} in 2017`
console.log(output)




// Which model was the most popular?

const vehicle = carData.map(function (element) {
    vehicleArray = element.vehicle
    return vehicleArray
})

let vehicleName = []
for (let i = 0; i < vehicle.length; i++) {
    vehicleName.push(vehicle[i].model)
}
const vehicleOrder = vehicleName.sort()
console.log(vehicleOrder)

let vehicleCount = []
let vcnt = 0
let vcurrent = null

for (let i = 0; i < vehicleOrder.length; i++) {
    if (vehicleOrder[i] != vcurrent) {
        if (vcnt > 0) {
            vehicleCount.push(`${vcnt}: ${vcurrent}`)
        }
        vcurrent = vehicleOrder[i];
        vcnt = 1;
    } else {
        vcnt++;
    }
}
if (vcnt > 0) {
    vehicleCount.push(`${vcnt}: ${vcurrent}`);
}
console.log(vehicleCount.sort())
//ANSWER
console.log(`${vehicleCount[vehicleCount.length - 1]} model was our most popular vehicle`)



// Which bank provided the most loans to our customers?

const credit = carData.map(function (element) {
    let creditArray = element.credit
    return creditArray
})

let creditName = []
for (let i = 0; i < credit.length; i++) {
    creditName.push(credit[i].credit_provider)
}
const creditOrder = creditName.sort()
console.log(creditOrder)

let creditCount = []
let ccnt = 0
let ccurrent = null

for (let i = 0; i < creditOrder.length; i++) {
    if (creditOrder[i] != ccurrent) {
        if (ccnt > 0) {
            creditCount.push(`${ccnt}: ${ccurrent}`)
        }
        ccurrent = creditOrder[i];
        ccnt = 1;
    } else {
        ccnt++;
    }
}
if (ccnt > 0) {
    creditCount.push(`${ccnt}: ${ccurrent}`);
}
console.log(creditCount.sort())
//ANSWER
console.log(`${creditCount[creditCount.length - 1]} provided the most loans to our customers!`)


//DOING IT STEVE'S WAY

const creditProvider = carData.reduce((banks, sale) => {
    const currentKey = sale.credit.credit_provider
    if (banks.has(currentKey)) {
        banks.set(currentKey, banks.get(currentKey) + 1)
    } else {
        banks.set(currentKey, 1)
    }
    return banks

    }, new Map())

    const creditArray = [...creditProvider.entries()]
    const sortedCredit = creditArray.sort((c, p) => p[1] - c[1])
    const topCredit = sortedCredit.shift()
    const creditOutput = `${topCredit[0]} provided the most loans to our customers`
    console.log(creditOutput)



//LIGHTNING EXERCISES
// 1. Create an object to represent a driver. The object should have properties to represent the following: driver's license number, a collection of vehicles they own, and a collection of dates for when they have gotten a ticket.

// 2. Iterate over your object and console log the keys and their values.

const Driver = Object.create(null, {
    licenseNumber: {
        value: 32904234209,
        enumerable: true
    },
    vehicles: {
        value: ["bmw", "audi", "toyota", "kia"],
        enumerable: true,
        writable: true
    },
    tickets: {
        value: ["09-08-2017", "04-30-2016", "03-23-2015"],
        enumerable: true,
        writable: true
    },
    drive: {
        value: function (action) {
            console.log(`Yes ma'am, I will ${action}`)
        }
    }
})

Driver.drive("Accelerate")

for (const key in Driver) {
    console.log(`${key} ${Driver[key]}`)
}