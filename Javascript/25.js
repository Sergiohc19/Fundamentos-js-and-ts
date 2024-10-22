// Modules ECMAScript
import { sum, subtract } from "./funciones.js"


const resultSum = sum(20, 10)
console.log(resultSum)

const resultSubtract = subtract(20, 10)
console.log(resultSubtract )


//?Para diferenciar tambíen se pueden poner así :

//!     import { sum os funcionSumar, subtract } from "./funciones.js"

//?*También se podría poner así y usar las funciones así para diferenciar de otras importaciones

//!     const operation = funcionSumar(20, 10)
//!     console.log(operation)

//? El import de export default:

//!     import multiply, { sum, subtract } from "./funciones.js"

//*     const result = multiplicar(20, 10)
//*     console.log(result)

