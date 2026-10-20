let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = array2.concat(...array1).sort((a, b) => b - a);
console.log(array3);
//for each y map 
array3.forEach((numero) => { console.log(numero * 2); });
let numerospordos = array1.map((numero) => { return numero * 2; });
console.log(numerospordos);
let numerosPares = array1.map((numero) => {
    if (numero % 2 == 0) {
        return "par";
    }
    else
        return "impar";
});
console.log(numerosPares);
export {};
