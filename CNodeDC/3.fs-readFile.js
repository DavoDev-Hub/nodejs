const fs = require('node:fs'); // Nos permite trabajar con el sistema de archivos

const text = fs.readFileSync('CNodeDC/archivo.txt', 'utf-8'); // Leemos el archivo de forma síncrona
console.log(text);