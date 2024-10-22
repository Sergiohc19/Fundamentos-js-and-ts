// Logical Or y Logical And
const balance = 1000
const pay = 1500
const creditCard = true

/**
 *  || Or - Al menos una se cumpla
 * && And - Reviso que todas se cumplen
 * 
 */



balance > pay || creditCard ? console.log("Puedes pagar") : console.log("No, no puedes pagar")