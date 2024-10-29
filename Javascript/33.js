// Eventos del DOM - Submit
//* Se selecciona un id y se guarda en una variable
const formulario = document.querySelector("#formulario")
//* Se llama a la variable con su id y se le indica la acción que debe hacer con event y la function flecha
formulario.addEventListener("submit", (e) => {
    //* Se previene la acción por defecto
    e.preventDefault()
//* Se selecciona un id con su valor y se guarda en una variable
    const nombre = document.querySelector("#nombre").value
//* Se selecciona un id con su valor y se guarda en una variable
    const password = document.querySelector("#password").value
//* Si el input de nombre o el de password se manda vacio se imprime lo siguiente...si no se imprime lo siguiente...
    nombre === "" || password === "" ? console.log("Todos los campos son obligatorios...") : console.log("Iniciando sesión...")
//* Cuando se hace submit se imprime lo que contiene el input nombre
    console.log(nombre)
//* Cuando se hace submit se imprime lo que contiene el input password
    console.log(password)
//* Cuando se hace submit se imrprime lo siguiente...
    console.log("Enviando Formulario...")
})