// Tipos de dato

// String o cadenas de texto
let cliente = "Juan"
console.log(cliente)
// Tipo de dato con typeof
console.log(typeof cliente)

// Numbers
const number1 = 20.12
const number2 = 12
const number3 = 8
const number4 = "2"
console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)
// El resultado de abajo es 212 porque se concatena, hay que tener cuidado en js con esto, asegurarse que los dos datos son numbers
console.log(number4 + number2)

// Bigint para números grandes, apenas se utiliza
bigNumber = BigInt(55555555555555554444444)
console.log(bigNumber)

// Boolean, hay dos tipos: True y False
const discount = false
console.log(typeof discount)

// Null
const age = null
// La variable está definida, pero tiene el valor de null
console.log(age)

// Undefined
let price
// La variable no está definida por eso es undefined
console.log(price)

// Symbol, todos los Symbol son únicos
const firstSymbol = Symbol(30)
const secondSymbol = Symbol(30)
console.log(firstSymbol === secondSymbol)

















