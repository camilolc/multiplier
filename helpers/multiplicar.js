const fs = require("fs");
const colors = require("colors");
const createFile = async (base = 5, list, until = 10) => {
  try {
    let output,
      _console = "";
    for (let i = 0; i <= until; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
      _console += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }
    if (list) {
      console.log("===============".green);
      console.log("Table of ".green, colors.blue(base));
      console.log("===============".green);
      console.log(_console);
    }
    //Hay que poner el path, en caso contartio se tomara como base la misma del archivo que se esta ejecutando
    fs.writeFileSync(`./output/table-${base}.txt`, output);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: createFile,
};
