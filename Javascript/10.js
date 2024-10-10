
const technologies = ["HTML", "CSS", "JAVASCRIPT", "React.js", "Node.js"]
technologies[5] = "Next.js" //Esto añade otra tecnología más despues de Node.js
//? technologies[5] = "Next.js" // De esta forma se sustituye Node.js por Next.js porque reasigna el valor
//? technologies[5] = "Next.js" // De esta forma s añadiría Next,js en la posición 10, sin espacios en blanco
/* Si no conocemos el index del Array y lo queremos hacer de forma dinámica, lo podemos hacer 
con los métodos, en la consola en la palabra Array, si despliegas te saldrá un Prototype,
Si despliega el Prototype te saldrán todos los métodos que permiten los Arrays
*/
//? technologies.push("Python")//*El Método push añade un elemento a la última posición del Array
//!En React el método push muta el arreglo "Lo modifica y no se recomienda utilizar con React"
console.table(technologies)

const newArray = [...technologies, "Python"]
console.table(newArray)

// *Si lo ponemos al réves, el Array empezaría por Python
const newArray2 = ["Python",...technologies]
console.table(newArray2)

//* Ahora quiero eliminar HTML del Array, el Método shift elimina el primer elemento del array
//!En React el método shift muta el arreglo "Lo modifica y no se recomienda utilizar con React"
//?  technologies.shift()
//?  console.table(technologies)
//* El valor de tech es cada uno de los elementos del array technologies
//* Lo que hace la function es acceder a cada elemento del array
//* El Método filter recorre cada elemento y saca o mete un elemento dependiendo de la condición
const technologies2 = technologies.filter(function(tech) {
    if(tech === "HTML") { //* Si tech es igual a HTML retorna tech, si no es igual a HTML no lo retorna
                          //* Solo imprimiría HTML en el array technologies2
        return tech
    }
})

console.table(technologies2)
// Con el Método filter no hay mutación y React lo permite
const technologies3 = technologies.filter(function(tech) {
    if(tech !== "HTML") { //* Si tech no es igual a HTML retorna el elemento, en este caso
                         //* Lo que no imprime es HTML en el array technologies3, los demás si
        return tech
    }
})

console.table(technologies3)


