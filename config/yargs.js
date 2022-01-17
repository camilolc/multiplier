const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "This is the base of the multiplication table",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Show the multiplication table",
  })
  .option("u", {
    alias: "until",
    type: "number",
    default: 10,
    describe: "set the multiplication limit",
  })
  .check((argv, option) => {
    if (isNaN(argv.b) && isNaN(argv.h)) {
      throw "he base and the multiplier must be numbers";
    }
    return true;
  }).argv;

module.exports = argv;
