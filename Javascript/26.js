//  Fetch API with Promises
const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then(res => res.ok ? res.json() : Promise.reject(res.status))
  .then(data => console.log(data))
  .catch(error => error === 404  ? console.error(`Error ${error}: Recurso no encontrado`) :
   error === 500 ? console.error(`Error ${error}: Error en la conexión a internet`) :
   console.log(`Error ${error}: Error en la respuesta`));


  


//?En las siguientes lineas es otra forma de hacerlo, pero con cosas que mejorar, se ha mejorado el manejo de errores
// const url = "https://jsonplaceholder.typicode.com/comments"

// fetch(url)
//     //* El primer .then busca la información en la url que le hayas dado y si no la encuentra te imprime un error
//     .then(res => res.ok ? res.json() : console.error("Error en la respuesta"))
//     //* El segundo .then muestra la información una vez que se haya encontrado en el .then anterior que es el primero 
//     .then(data => data && console.log(data))
//     //* El .cath muestra un error si no tenemos internet
//     .catch(error => error && console.log(error))



