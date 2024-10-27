// Selectores 
const heading = document.querySelector(".heading")

console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);
console.log(heading.id);

//* querySelectorAll te traerá todos los elementos de esa clase
const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces)

//* querySelectorAll te traerá el primer elemento que cumpla la condición, que será el primer enlace de esa clase
const enlaces2 = document.querySelector(".navegacion a")
console.log(enlaces2)
