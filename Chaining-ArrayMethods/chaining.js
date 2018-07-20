const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
const orderIntegers = integers.sort((a, b) => a - b)
const reverseIntegers = orderIntegers.reverse()
console.log(reverseIntegers);

// Remove any integers greater than 19.
const newIntegers = []
for (let i = 0; i < orderIntegers.length; i++) {
    if (orderIntegers[i] > 19) {
        delete orderIntegers[i]
    } else {
        newIntegers.unshift(orderIntegers[i])
    }
}
console.log(newIntegers)

// Multiply each remaining number by 1.5 and then subtract 1.
let multiplyIntegers = []
for (let i = 0; i < newIntegers.length; i++) {
    let num = (newIntegers[i] * 1.5) - 1;
    multiplyIntegers.unshift(num)
}
const totalMultipled = multiplyIntegers.reduce(
    (currentTotal, next) => currentTotal + next
)

// Then output (either in the DOM or the console) the sum of all the resulting numbers.

console.log(totalMultipled);
