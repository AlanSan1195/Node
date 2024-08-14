


// todo lo asicnrono con promesas simplificado 

import { readFiles } from "node:fs/promises";

Promise.all([
  readFiles("./text1.txt", "utf-8"),
  readFiles("./text2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("tu primer texto esssss: ", text1);
  console.log("tu segundo texto es: ", text2);
});





