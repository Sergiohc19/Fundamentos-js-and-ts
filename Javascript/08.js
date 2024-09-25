// Template String y Concatenación 

const product = "12-inch tablet"
const price =  400
const marca = "Orange"
// Forma de concatenar
console.log("The product is:" + product)
// Otra forma de concatenar, es la misma que la de abajo con los backtip
console.log(product + " $" + price + " Dolares, marca: " + marca)
// De esta forma se hace con los Template Strings, la forma actual
// Código más fácil de mantener y más usado en React
console.log(`${product} $${price} Dolares, marca: ${marca}`)//*A estas comillas se las llama Backtip

