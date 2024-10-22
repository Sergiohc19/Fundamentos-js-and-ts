// Operadores Ternarios
const auth = true


const balance = 1000
const pay = 1500
const creditCard = true

//*Si el usuario está autenticado imprime Usuario autenticado, si no imprime No autenticado...
auth ? console.log("Usuario autenticado") : console.log("No Autenticado, ir a Login")
/**
 * *Si el balance "disponible" es mayor que pay "pagar" imprime 'Puedes pagar', si no se cumple la primera condición
 * *Pasa a la siguente, si tienes creditCard "tarjeta de crédito" imprime ''Puedes pagar con tarjeta, si no se cumple
 * * Imprime 'No, no puedes pagar'
 * */
balance > pay ? console.log("Puedes pagar") : // if
creditCard ? console.log("Puedes pagar con tarjeta") : // else if
console.log("No, no puedes pagar") // else
//* El || - Or y el && - And te hace ahorrarte el else if, simplifica el código
balance > pay || creditCard ? console.log("Puedes pagar") : console.log("No, no puedes pagar")  // if and else

//? Lo recomendable es usar solo 2 niveles en los operadores ternarios y no 3, un ? y un :