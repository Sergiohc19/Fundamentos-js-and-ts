// Objetos - Destructuring de dos o más objetos 
const product = {
    name: "Tablet",
    price: "250",
    available: false
}

const customer = {
    name: "Juan",
    premiun: true,
    address: {
        street: "Pablo Picasso Street"
    }
}

const { name } = product
/* Evita colisión de nombres al renombrar el valor
        ?Posible Pregunta de entrevista técnica
?                           ↓
   TODO: De esta forma imprime la propierdad street y su valor
    !const { name: nameCustomer, address: street } = customer
*/
const { name: nameCustomer, address: street } = customer
/*      
        ?Posible Pregunta de entrevista técnica
?                           ↓
    TODO: De esta forma imprime solo el valor de street
     !{name: nameCustomer, address: { street }} = customer
*/

console.log(name)
console.log(nameCustomer)
console.log(street)
