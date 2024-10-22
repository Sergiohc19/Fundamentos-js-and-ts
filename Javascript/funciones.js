//* Está forma de export puede ahorrar tiempo, pero el¡n el import se tienen que llamar las funciones igual:

export function sum(n1, n2) {
    return n1 + n2 
}

//* Arrow Function Export, el código más simple y limpio

export const subtract = (n1, n2) =>  n1 - n2 



//? Tambíen se pueden usar como Export como objetos :

//!     export {
//!         sum,
//!         subtract
//!    }

//? Export Default ( Solo uno por archivo, lo puedes llamar como quieras) :

//!     export default function multiply(n1, n2) {
//!         return n1 + n2
//!     }

