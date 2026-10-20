function calcularFactorial(numero) {
    // Caso base
    if (numero === 0 || numero === 1) {
        return 1;
    }
    // Caso recursivo
    return numero * calcularFactorial(numero - 1);
}
const numero = 4;
if (!Number.isNaN(numero) || numero < 0) {
    console.log("Debe ingresar un número entero mayor o igual que cero.");
}
else {
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es ${factorial}.`);
}
export {};
