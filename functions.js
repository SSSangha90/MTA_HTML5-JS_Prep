
const mixedNums = [2, 7, 3, 8, 4, 9];

const addToTotal = (curVal, newVal) => {
    console.log('current total: ' + curVal)
    console.log('new value: ' + newVal)
    return curVal + newVal
}

console.log(mixedNums.reduce(addToTotal, 0))