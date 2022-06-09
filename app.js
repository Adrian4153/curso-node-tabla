
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//crear un programa que muestre la tabla del 5
console.clear();

/* const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5] = arg3.split('=');
console.log(base); */

//option l
//listar
//boolean
//valor por defecto en false

console.clear();

console.log(argv);


//const base=3;
 crearArchivo(argv.b,argv.l,argv.h)
.then(archivo => {
 console.log(archivo,'creado');
})
.catch(err =>{
console.log(err);
});
  

