const fs = require("node:fs");

// de esta fomra estamos haciendo las cosas SINCRONOS     " readFiliesSync""   read files debuelve un BUFFER le pedios que lo conveirta en utf-8
console.log("Empezamoms el proceso de lecturad de archivos");

const text1 = fs.readFileSync("./text1.txt", "utf-8");
console.log("este es el valor de tu primer texto: " + text1);

console.log("aqui estaremos leyendo mas cosas ");
const text2 = fs.readFileSync("./text2.txt", "utf-8");
console.log("este es el valor de tu segundo texto: " + text2);

// salida...
// Empezamoms el proceso de lecturad de archivos
// este es el valor de tu primer texto: lorem esto hay dentro del primer texto
// aqui estaremos leyendo mas cosas
// este es el valor de tu segundo texto: lorem esto hay dentro del segundo texto


