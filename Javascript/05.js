// Manipulación de Objetos

const product = {
    name: "PC",
    price: 800,
    avairable: false
}
console.log(product)
// Método para que no se pueda modificar un objeto, ni eliminar, ni añadir nada(posible pregunta de entrevista de trabajo)
Object.freeze(product)
// Método que te permite solo modificar un objeto
Object.seal(product)
// Reescribir un valor
product.avairable = true
console.log(product)
// Si no existe, lo va a añadir
product.img = "img.jpg"
console.log(product)
// Elimina un valor del objeto
delete product.img
console.log(product)