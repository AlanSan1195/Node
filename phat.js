



const path = require('node:path');

// lo que vamos a querer es crear otras rutas
console.log(path.sep)


// unir rutas con path.join
const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);


const extencion = path.extname("imagen.jpg");
console.log(extencion);
