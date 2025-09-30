// fs significa file system

const fs = require('node:fs'); // Nos permite trabajar con el sistema de archivos

const stat = fs.statSync('CNodeDC/archivo.txt'); // Nos da información del archivo

console.log('Información del archivo:');
console.log(
    stat.isFile(), // si es un fichero
    stat.isDirectory(), // si es un directorio
    stat.isSymbolicLink(), // si es un enlace simbólico
    stat.size, // tamaño en bytes
)