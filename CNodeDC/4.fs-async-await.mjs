// Esto solo en modulos comunes (CommonJS)
// que no tienen promesas nativas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const { readFile } = require('node:fs/promise'); // Nos permite trabajar con el sistema de archivos


(() =>{
    
} 
)();

console.log('Leyendo el primer archivo...:');
const text = await readFile('./archivo1.txt', 'utf-8');
console.log('primer texto: ',text);
console.log(' --> Haciendo otra cosa mientras se lee el primer archivo...');

console.log('Leyendo el segundo archivo...:');
const text2 = await readFile('./archivo2.txt', 'utf-8');
console.log('segundo texto: ',text2);

