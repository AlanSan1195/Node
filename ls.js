const fs = require("node:fs");
//lee los archivos de un directorio    .readdir()
fs.readdir("./")
  .then((files) => {
    console.log(files);
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((error) => {
    if (error) {
      console.log(" este es el error : ", error);
    }
  });
