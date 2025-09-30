const fs = require('node:fs'); // Nos permite trabajar con el sistema de archivos

console.log('Leyendo el primer archivo...:');
const text = fs.readFileSync('CNodeDC/archivo.txt', 'utf-8'); // Leemos el archivo de forma síncrona
console.log(text);


console.log('Leyendo el segundo archivo...:'); 
fs.readFile('CNodeDC/archivo2.txt', 'utf-8', (err, data) => { // Leemos el archivo de forma asíncrona
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(data);
});