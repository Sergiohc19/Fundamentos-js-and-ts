const tecnologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];
//? Esta sería una forma de hacer un for, pero no es la mejor ya que no se adapta si se crean más items
//* for (let i = 0; i < 5; i++) {
//*     console.log(tecnologies[i])
//* }

tecnologies[5] = "Nest.js" // Se añade en la posición 5 que no existe un item
tecnologies.push("Typescript") // Se añade un item al final del Array
//? De esta forma el for se adapta a los items que se vayan creando, lo hace dinámico y es mejor opción
 for (let i = 0; i < tecnologies.length; i++) {
    console.table(tecnologies[i])
 }
//! La diferencia entre forEach y map es que forEach sustituye al for y map te crea un nuevo array
 // forEach
 //? Es lo mismo que el for de arriba, esta forma es más claro y corto, ya sabe cuantas veces tiene que ejecutarse, se conoce la longitud
 //? Del Array. El forEach sustitutye al for
 const arrayforEach = tecnologies.forEach(function(tech) {
    return tech
 })

 // map
//? El map te crea un nuevo array
 const arrayMap = tecnologies.map(function(items) {
    return items
 })

 // for ... of
 //? Hace lo mismo que el for y el forEach, pero de forma más corta
for (let item of tecnologies) {
    console.log(item)
}
console.log(arrayMap, arrayforEach)
