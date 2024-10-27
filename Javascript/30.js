// Manipular elemento HTML con JS
//* Visita lo que contiene la clase heading
const heading = document.querySelector(".heading")
//* Visita lo que contiene todos los enlaces de navegación
const enlaces = document.querySelectorAll(".navegacion a")

console.log(heading.textContent)
//* Cambia el contenido de texto de la clase heading
heading.textContent = "Un nuevo Heading"
//* Cambia el id de la clase heading
heading.id = "Un nuevo ID"
//*Elimina el elemento
heading.removeAttribute("class")

const inputNombre = document.querySelector("#nombre")
//* Cambia el valor del input 
inputNombre.value = "default"

inputNombre.dataset.nombre = "input"
//* Imprime cuantas clases existen con ese nombre
console.log(inputNombre.classList)
//* Cambia el texto de el enlace en la posición 0
enlaces[0].textContent = "Nuevo Enlace"
//* Cambia el texto de todos los enlaces iterando todo el array
enlaces.forEach(enlace => enlace.textContent = "Nuevo Enlace" ) 
console.log(enlaces)
