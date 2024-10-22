// Comparador vs Comparador estricto

const num1 = 20
const num2 = "20"

/* 
    == (Comparador no estricto)
    === (Comparador estricto)
*/
console.log(typeof num1)
console.log(typeof num2)


//! Esto puede ser una pregunta de entrevista técnica: Qué diferencia hay entre los dos comparadores?
//* Normalmente vas a usar el estricto, que es el siguiente, evitas errores
num1 == num2 ? console.log("Si, son iguales") : console.log("No, no son iguales") 

num1 === num2 ? console.log("Si, son iguales") : console.log("No, no son iguales")