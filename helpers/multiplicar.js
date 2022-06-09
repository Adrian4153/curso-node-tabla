const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {


    try {

        /*   console.log('================');
          console.log('  Tabla del', base);
          console.log('================');
   */
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.america} ${colors.green(i)} ${'='.america} ${colors.green(base * i)}\n`.green;
        }
        if (listar) {
            console.log('================');
            console.log('  Tabla del', base);
            console.log('================');
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

};

module.exports = {
    crearArchivo,
}