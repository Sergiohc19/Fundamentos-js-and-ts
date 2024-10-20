// Function - Function Expression
add(10,20)
add(300,1)
add(100)
//? Pregunta de entrevista junior 
//! La forma en la que se declara la funtcion hará que se impriman los argumentos o no.
//! Const add = function() no imprimirá los argumentos al estar por encima de la function,
//! Function add() imprimirá los argumentos, da igual el si los argumentos están en lineas anteriores, primero devolverá la function y después los argumentos

//? const add = function(numb1 = 0, numb2 = 0) {
//?     console.log(numb1 + numb2)
//? }

function add(numb1 = 0, numb2 = 0) {
    console.log(numb1 + numb2)
}

