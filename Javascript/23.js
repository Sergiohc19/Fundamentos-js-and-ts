// Opcional Choining (?)
const students = {
    name: "Juan",
    class: "Developer 1",
    passed: true,
    exams: {
        exam1: 90
    }
}
//* Si existe  ?, exams "Examenes" imprime el exam1, funciona como un if abreviado
console.log(students.exams?.exam1) //* Se utiliza para bases de datos o para respuestas de una API

console.log("Después de ALUMNO")

// Nullish coolescing operator (??)
const page = null ?? 1 //* Se utiliza cuando trabajar con un paginador
console.log(page)