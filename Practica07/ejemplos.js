let l1 = "libro1";
let l2 = "libro2";
let l3 = "libro3";
let libros = ["libro1", "libro2", "libro3"];
for (let i = 0; i < libros.length; i++) {
    console.log(libros[i]);
}
console.log(libros.length);
let libro4 = "el principito";
libros.push(libro4);
libros.unshift("el niño");
libros.pop();
libros.shift();
console.log(libros);
export {};
