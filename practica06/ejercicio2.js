// Ejercicio 2: Gestión de calificaciones
// Se posee un array que contiene las calificaciones obtenidas por un estudiante durante el ciclo
// académico. Utilizando métodos de arrays, realice las siguientes operaciones:
// • Elimine la primera calificación registrada.
// • Agregue una nueva calificación al final del array.
// • Ordene las calificaciones de menor a mayor.
// • Calcule la suma total de todas las calificaciones.
let calificaciones = [8, 6, 9, 7, 10];
console.log("Calificaciones originales:", calificaciones);
// Eliminar la primera calificación
calificaciones.shift();
console.log("Después de eliminar la primera calificación:", calificaciones);
// Agregar una nueva calificación al final
calificaciones.push(8.5);
console.log("Después de agregar una nueva calificación:", calificaciones);
// Ordenar de menor a mayor
calificaciones.sort((a, b) => a - b);
console.log("Después de ordenar de menor a mayor:", calificaciones);
// Calcular la suma total
const sumaTotal = calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
console.log("Suma total de las calificaciones:", sumaTotal);
export {};
