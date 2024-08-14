
// recuerda el formato ( .js o .mjs) depende de ellos es importar o requerir el modulo que requiramos para trabajar 
// en este caso el "fs" que es el que tiene el fs.readFile


//forma ASINCRONA
const fs = require("node:fs");


console.log("Empezamoms el proceso de lecturad de archivos");
//calbacks: funciones quese ejecutan despues de que una actividad termine
fs.readFile("./text1.txt", "utf-8", (error, texto) => {
  console.log(texto);
});

console.log("Aqui estamos haciendo mas cosas")

fs.readFile("./text2.txt", "utf-8", (error, texto) => {
  console.log(texto);
});

console.log("termine de leer los archivos");


//apredniste que gracias a las sintaxis de un callback las variables 
// que ves iguales no colicionan por que estan envueltas cada UNA EN SU CALLBACK, LA CACHAS ? 


// salida ....
// Empezamoms el proceso de lecturad de archivos
// Aqui estamos haciendo mas cosas
// lorem esto hay dentro del primer archivo y ecribi alan
// lorem esto hay dentro del segundo archivo y ecribi alan
// termine de leer los archivos
