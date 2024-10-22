// Evaluación de corto circuito
const auth = true
// Si el usuario está autenticado entonces se imprime 'Usuario Autenticado', no queremos hacer otra cosa, asique no hace falta el ternario
auth && console.log("Usuario Autenticado") //* Ejemplo de Evaluación de corto circuito
// Si necesitamos hacer otra cosa si no está autenticado se puede utilizar el ternario
auth ? console.log("Usuario Correcto") : ""

const user = {}
//? ¡¡¡Esto puede ser un error porque user no tiene nada dentro y se imprime que está Autenticado, mucho cuidado!!!
user && console.log("Usuario Autenticado")


if(0) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}