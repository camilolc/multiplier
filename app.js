//filesystem

const colors = require("colors");
const { option } = require("yargs");
const { crearArchivo: createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

// console.log(process.argv);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

console.log(argv);

createFile(argv.b, argv.l, argv.u)
  .then((fileName) => console.log(fileName.rainbow, "Done"))
  .catch((err) => console.log(err));
