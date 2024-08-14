

// recuerda que es un formato ".js" y el modulo se extra con "require" y queremos el la funcion de readFile

const {readFile}= require("node:fs/promises");
(async ()=>{
  console.log("Empezamoms el proceso de lecturad de archivos");
  const text1 = await readFile("./text1.txt", "utf-8")
  console.log("este es el valor de tu primer texto: " + text1);

  console.log("aqui estaremos leyendo mas cosas ");

  readFiles("./text2.txt", "utf-8")
  const text2 = await readFile("./text2.txt", "utf-8");
  console.log("este es el valor de tu segundo texto: " + text2);
})()