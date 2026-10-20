// Asistencia semanal: representa con valores booleanos la asistencia de lunes a viernes. 
// Muestra el registro completo, el lunes, miércoles y viernes, y la cantidad de días.

const asistencia:boolean[]=[true, false, true, false, true]

//Registro completo
console.log("Registro completo: ", asistencia)

//Lunes, miércoles y viernes
console.log("Lunes: ", asistencia[0])
console.log("Miércoles: ", asistencia[2])
console.log("Viernes: ", asistencia[4])

// Dos formas de declarar: escribe la misma lista de tres municipios con string[] y Array<string>. 
// Accede al segundo municipio de ambos arreglos y explica cuál sintaxis te resulta más legible.

console.log("Municipios con string[]: ", ["San Miguel", "La Unión", "Morazán"][1])
console.log("Municipios con Array<string>: ", new Array<string>("San Miguel", "La Unión", "Morazán")[1])

// La sintaxis que me resulta más legible es la de string[] porque es más corta y directa,
//  mientras que Array<string> es más larga y menos intuitiva.