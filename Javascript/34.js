// Eventos del DOM - Submit y Alertas

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const nombre = document.querySelector("#nombre").value

    const password = document.querySelector("#password").value

    // Prevenir nuevas alertas
    const alertaPrevia = document.querySelector(".alerta")
    //* Si ya existe otra alerta se borra para que no haya muchas alertas
    alertaPrevia?.remove()

    //* Se crea una alerta 
    const alerta = document.createElement("DIV")
    //* Se añaden sus clases
    alerta.classList.add("alerta", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black")
    console.log(alerta)


    if(nombre === "" || password === "") {
        alerta.textContent = "Todos los campos son obligartorios..."
        alerta.classList.add("bg-red-500")
    } else {
        alerta.textContent = "Iniciando sesión..."
        alerta.classList.add("bg-green-500")
    } 


    console.log(nombre)

    console.log(password)

    console.log("Enviando Formulario...")
    //* Se agrega a los hijos del formulario para que se muestre
    formulario.appendChild(alerta)

    setTimeout(() => {
        //*Elimina un elemento del código html
        alerta.remove()
    }, 3000);
})