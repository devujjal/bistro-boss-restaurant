const numbers = [5, 12, 8, 130, 44];
const result = numbers.reduce((previousValue, currentValue) => {
    previousValue + currentValue
},0)


console.log(result)