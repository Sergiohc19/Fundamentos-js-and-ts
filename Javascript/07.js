// Objetos - Destructuring de dos o más objetos 
/* 
    !Este código es una posible pregunta de entrevista técnica, diferentes maneras de unir objetos.
*/
const product = {
    name: "Tablet",
    price: "250",
    available: false
}

const customer = {
    name: "Sergio",
    premiun: true
}
/*En este caso el objeto ShoppingCart contiene una propiedad de cantidad y su valor,
además contiene otro objeto product que tiene propiedades y valores,
se van a imprimir el objeto shoppingCart y el objeto product que contiene

*/
const shoppingCart = {
    quantity: 2, 
    ...product // *spread operator 
}
console.table(shoppingCart)
/* Se puede unir el contenido de un objeto dentro de otro objeto
sin tener que contener el objeto entero*/
// Tiene mucho código y se puede hacer más limpio
const newObject = {
    product: {...product},
    customer: {...customer},
}

/* De esta forma es más simple y más limpio y hace lo mismo que antes
?    const newObject = {
?       product,
?       customer,
?    }
*/
console.table(newObject)
/* De esta forma imprime los dos objetos, pero no sale el name del product
 porque el valor de name se reasigna
 Se puede hacer más simple y limpio
 */
const newObject2 = {
    ...product,
    ...customer,
}
console.table(newObject2)
/*De esta forma hace lo mismo y es más simple y más limpio*/
const newObject3 = Object.assign(product, customer) // Para unir objetos, más corto y claro
console.table(newObject3)