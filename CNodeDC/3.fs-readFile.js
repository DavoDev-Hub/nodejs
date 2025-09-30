const fs = require('node:fs'); // Nos permite trabajar con el sistema de archivos

console.log('Leyendo el primer archivo...:');
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => { 
    console.log(text);
});

console.log('--> Haciendo otra cosa mientras se lee el segundo archivo...');

console.log('Leyendo el segundo archivo...:'); 
fs.readFile('./archivo2.txt', 'utf-8', (_err, text) => { 
    console.log(text);
});