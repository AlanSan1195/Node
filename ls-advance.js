
// conocimos el metodo "process.argv" que nos permite leer los argumentos que se pasan por consola 
//[2] por que 0 y 1 son rutas de node y del archivo que se esta ejecutando "node", "documentos/.../ls-advance.js"

const fs = require("node:fs/promises");
const carpeta = process.argv[2] ?? ".";
//lee los archivos de un directorio    .readdir()
fs.readdir(carpeta)
  .then((datos) => {
    datos.forEach((dato) => {
      console.log(dato);
    });
  })
  // maneja siempre los errorres para que no tengamos problemas internos
  .catch((error) => {
    if (error) {
      console.log(" este es el error : ", error);
    }
  });
