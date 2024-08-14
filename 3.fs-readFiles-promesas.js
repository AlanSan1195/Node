

// este tipo de codigo es : mira... yo ejecuto todo y te prometo que los texto sale por que salen
// en cuando los tenga listos te los doy mientras sigo chambeando 

const fs = require("node:fs/promises");
//ASINCRONO CON PROMESAS 
console.log("Empezamoms el proceso de lecturad de archivos");
//calbacks: funciones quese ejecutan despues de que una actividad termine
fs.readFile("./text1.txt", "utf-8",).then((texto)=>{
    console.log(texto);
});

console.log("Aqui estamos haciendo mas cosas")

fs.readFile("./text2.txt", "utf-8").then ((texto)=>{
    console.log(texto);
});

console.log("termine de leer los archivos");

