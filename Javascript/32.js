// Eventos del DOM - Inputs 
const inputNombre = document.querySelector("#nombre")
inputNombre.addEventListener("input", (e) => {
    console.log("escribiendo...")
    console.log(e.target.value,)
    console.log(e.target.value, e.target.value.length)
})
