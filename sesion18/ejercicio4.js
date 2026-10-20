// Ejercicio 4. Contador recursivo de caracteres
// La biblioteca universitaria necesita conocer la longitud de ciertos códigos textuales sin utilizar directamente la propiedad .length para obtener el resultado final.
// Desarrolle una función recursiva que reciba una cadena y cuente cuántos caracteres contiene.
// La función debe:
// Retornar 0 cuando reciba una cadena vacía.
// Reducir la cadena en cada llamada.
// Sumar una unidad por cada carácter encontrado.
// Retornar un valor de tipo number.
// Probarse con un código como "UNIVO2026".
// Explique qué parte de la cadena es enviada a la siguiente llamada y por qué el proceso termina.
// Función recursiva para contar la cantidad de caracteres de una cadena.
// Recibe una cadena de texto y devuelve un resultado de tipo number.
function contarCaracteres(cadena) {
    // Caso base: si la cadena está vacía, significa que ya no quedan caracteres.
    if (cadena === "") {
        return 0;
    }
    else {
        // Se cuenta el primer carácter sumando 1.
        // Luego, la función se vuelve a llamar eliminando el primer carácter.
        return 1 + contarCaracteres(cadena.slice(1));
    }
}
// Se establece la cadena de texto a la que se le contará la cantidad de caracteres.
const codigo = "UNIVO2026";
// Se llama a la función para obtener la cantidad de caracteres de la cadena.
const longitud = contarCaracteres(codigo);
// Se muestra en pantalla la longitud de la cadena.
console.log(`La longitud del código "${codigo}" es ${longitud}.`);
export {};
// Explicación del proceso:
// En cada llamada recursiva, se toma el primer carácter de la cadena y se suma 1 al contador. Luego,
//  se llama a la función nuevamente con el resto de la cadena (es decir, la cadena sin el primer carácter).
//  Este proceso continúa hasta que la cadena se vuelve vacía, momento en el cual se alcanza el caso base y
//  se retorna 0. La suma acumulada de todas las llamadas recursivas da como resultado la longitud total de la cadena.
