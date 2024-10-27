// Eventos del DOM - Clicks
const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")
// //* Evento al dar click derecho al elemento
//? heading.addEventListener("click", () => {
//?     heading.textContent = "New Heading al dar click"
//? })
//* Evento al dar doble click derecho al elemento
//? heading.addEventListener("dblclick", () => {
//?     heading.textContent = "New Heading al dar click"
//? })
//* Evento al pasar el mouse por encima del elemento
//? heading.addEventListener("mouseenter", () => {
//?     heading.textContent = "New Heading al dar click"
//? })
//* Evento al pasar el mouse por fuera del elemento
//? heading.addEventListener("mouseleave", () => {
//?     heading.textContent = "Saliendo"
//? }) 

//* Itenera todos los enlaces y crea un evento de click, al darle click cambia el texto a "Diste click" e imprime en consola diste click en un enlace
enlaces.forEach( enlace => {
    enlace.addEventListener("click", (e) => {
        //* Previene la acción por defecto
        e.preventDefault()
        //*Cambia el texto al darle click
        e.target.textContent = "Diste Click"

        console.log("diste click en un enlace...")
        console.log(e.target)
    })
})
