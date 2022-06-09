const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  },
    'l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  },
    'h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    describe: 'Es el hasta donde quieres que se multiplique',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .argv;

module.exports = argv;
