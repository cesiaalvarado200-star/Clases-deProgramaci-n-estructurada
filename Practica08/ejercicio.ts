// Ejercicio
// Crea un programa que siga el siguiente flujo: definir un programa para almacenar datos de
// un producto, datos como nombre, precio y cantidad disponible teniendo en cuenta que el
// programa recibiré una cantidad considerable de productos y tendrá que hacer lo siguiente
// • Mostrar todos los productos del inventario.
// • Mostrar únicamente los nombres de los productos.
// • Calcular el valor total de cada producto (precio × cantidad).
// • Calcular el valor total de todo el inventario.
// • Encontrar el producto con el precio más alto.
// • Agregar un producto nuevo al arreglo.
// • Buscar un producto por su nombre y mostrar sus datos.

type Producto=[string, number, number]

let inventario:Producto[]=[
   ["maiz",10,2],
   ["azucar",2,5],
   ["frijol",4,2],
   ["sal",5,3],
]

for(const producto of inventario){
   console.log(
`Nombre: ${producto[0]}, precio: ${producto[1]}, cantidad: ${producto[2]}`
   )
}

for(const producto of inventario){
   console.log(`nombre: ${producto[0]}`)
}


for(const producto of inventario){
   let total=producto[1]*producto[2]
   console.log(`producto: ${producto[0]}, total: ${total.toFixed(2)}`)
}

let totalInventario: number=0

for(const producto of inventario){
   totalInventario=totalInventario+producto[1]*producto[2]
}

console.log(`el total del inventario es $${totalInventario}`)

let productoCaro:Producto=inventario[0]

for(const producto of inventario){
   if (producto[1] > productoCaro[1]){
      productoCaro=producto
   }
}

console.log(`nombre: ${productoCaro[0]}`) 

//Tarea.
//agregar un producto nuevo al arreglo
let nuevoProducto: Producto = ["arroz", 3, 4];

inventario.push(nuevoProducto);

console.log("Producto agregado correctamente:");
console.log(nuevoProducto);

//buscar un producto por su nombre y mostrar sus datos
let nombreBuscar: string = "frijol";

let productoEncontrado = inventario.find(
    producto => producto[0].toLowerCase() === nombreBuscar.toLowerCase()
);

if (productoEncontrado) {
    console.log("Producto encontrado:");
    console.log(`Nombre: ${productoEncontrado[0]}`);
    console.log(`Precio: $${productoEncontrado[1]}`);
    console.log(`Cantidad: ${productoEncontrado[2]}`);
} else {
    console.log("El producto no existe en el inventario.");
}
