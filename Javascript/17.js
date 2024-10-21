// Arrays Methods
const tech = ["HTML", "CSS", "Javascript", "React.js", "Node.js"]
const numbers = [10, 20, 30]

// Filter and Types of filter

//* Utilizada a menudo
const newArray1 = tech.filter(function(filter1){ 
    if(filter1 !== "Html") {
        return filter1
    }
})
console.table(newArray1)

//* Más corta y simple con arrow function, muy recomendada
const newArray2 = tech.filter((filter2) => filter2 !== "HTML")

const nums = numbers.filter(item => item > 15)

//* Al solor tener un párametro 'filter2' se puede eliminar el ()
//? const newArray2 = tech.filter(filter2 => filter2 !== "HTML") 

console.table(newArray2)
console.table(nums)

//* No se suele poner funciones aparte, no se suele utilizar
const newArray3 = tech.filter(filter3)

function filter3(technologies) {
    console.table(technologies)
}

// Includes
const result = tech.includes("CSS")

console.table(result)
