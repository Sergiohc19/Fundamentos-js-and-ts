// Objects: son una colección de múltiples valores
let product = {
    // Key = Value
    name: "tablet",
    price: 300,
    available: false
}
console.log(product)
console.log(typeof product)
// Imprime la el valor de la propiedad name
console.log(product.name)
// Imprime el objeto product en formato de tabla
console.table(product)
// Destructuring
// Esto se utilizaba en las versiones antiguas de js. Era para imprimir la propiedad
const nombre = product.name
console.log(nombre)
// Forma moderna de hacerlo
const {name} = product
console.log(name)

// Object Literal Enhacement
const authenticated = true
const user = "Carlos"
const newObject1 = {
    authenticated: authenticated,
    user: user
    /* En este caso en el que se llaman igual también podríamos ponerlo así:
    authenticated,
    user
    */
}
console.log(newObject1)
const authenticated2 = true
const user2 = "Carlos"
const newObject2 = {
    authenticated: authenticated2,
    user: user2
}
console.log(newObject2)



