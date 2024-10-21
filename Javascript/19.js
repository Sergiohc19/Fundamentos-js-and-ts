// Condicionales
//? Tenemos 4000 en el banco y queremos retirar 200 

const available = 4000
const withdraw = 5000

//? Si el usuario está autentificado tiene permiso a retirar el dinero, si no le dirá que no tiene permiso

const auth = true 
      //* Se cumple la condición            //* No se cumple la condición
auth ? console.log("Acceso al sistema...") : console.log("No tienes permiso, inicia sesión")
available >= withdraw ? console.log("Puedes retirasr tu dinero") : console.log("No tienes saldo en la cuenta")

/**
  > Mayor que 
  < Menor que
  >= Mayor o igual
  <= Menos o igual
  == Igual
  === Igual estricto
  !== Diferente a 
 */

  //? Ejemplos: Un usuario autenticado, Un usuario tiene dinero para pagar, Un usuario que confirmó su cuenta, la tienda virtual tiene suficientes articulos de lo que pidió