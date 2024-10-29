// Eventos del DOM - Inputs 
//* Se selecciona un id y se guarda en una variable
const inputNombre = document.querySelector("#nombre")
//* Se llama a la variable con su id y se le indica la acción que debe hacer con event y la function flecha
inputNombre.addEventListener("input", (e) => {
    //* Cuando se escriba en el input con el id nombre saldrá en la consola escribiendo
    console.log("escribiendo...")
    //* Indicará que letras se están escribiendo
    console.log(e.target.value)
    //* Indicará el número de las palabras escritas
    console.log(e.target.value.length)
})
//* Se selecciona un id y se guarda en una variable 
const inputPassword = document.querySelector("#password")
//* Se llama a la variable con su id y se le indica la acción que debe hacer, en este caso se llama a la function que contiene las acciones
inputPassword.addEventListener("input", functionPassword)

function functionPassword() {
    //* Lo que se escribe en el input de password está en tipo texto "Se puede ver lo que se escribe"
    inputPassword.type = "text"
    //* Con setTimeout se indica una acción que debe durar en un determinado periodo de tiempo
    setTimeout(() => {
        //* Pasa a tipo texto a tipo password pasados 300 ms
        inputPassword.type= "password"
    }, 300);
}
