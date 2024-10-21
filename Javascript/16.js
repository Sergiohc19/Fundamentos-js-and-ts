// Functions that return values
const add1 = function(num1 = 0, num2 = 0) {
    return num1 + num2
}

function add2(num3 = 0, num4 = 0) {
    return num3 + num4
}

const add3 = (num5 = 0, num6 = 0) => num5 + num6


const result1 = add1(10, 20)
const result2 = add2(10, 20)
const result3 = add3(10, 20)


console.table(result1,result2, result3)