// Arrays Methods 2
const tech = ["HTML", "CSS", "Javascript", "React.js", "Node.js"]
const numbers = [10, 20, 30]

// Some - Devuelve True si al menos uno cumple la condición
const result = numbers.some(num => num < 15) //* Retorna True porque al menos uno cumple la condición
result ? console.log("Si hay elementos") : console.log("No hay elementos")

console.table(result)

// Find - Devuelve el primer elemento que cumple una condición
const result2 = numbers.find(num => num > 15) //* Devuelve solo el primer elemento que cumpla la condición

console.log(result2)

// Every - Retorna True o False si todos cumplen la condición
const result3 = numbers.every(num =>  num > 15) //* Devuelve False porque no todos los elementos cumplen la condición

//? Podría utilizarse en el caso de que tuvieras que saber que todos los usuarios ya pagaron y si ejecutaria un código como el anterior si pagaron 
//? También podrías usar el .filter para saber quien no pagó
console.log(result3)

// Reduce - Retorna un acumulado de total

//? Puede servir para un carrito de la compra y si quieres mostrar al usuario el total de su compra
const result4 = numbers.reduce((total, num) => {
    console.log(total)
    console.log(num)
    return total + num
}, 0)
console.log(result4)
//* Se podría hacer con la arrow function 
const result5 = numbers.reduce((total, num) =>  total + num, 0)
console.log(result5)

