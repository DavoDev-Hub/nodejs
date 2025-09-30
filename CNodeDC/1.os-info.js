// const os = require('node:os'); // Nos da información del sistema operativo
import os from 'node:os'; // Nos da información del sistema operativo

console.log('Información del sistema operativo');
console.log('--------------------------------');
console.log('Tipo de SO:', os.type());
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Memoria libre:', os.freemem());
console.log('Memoria total:', os.totalmem());
console.log('Uptime (segundos):', os.uptime());
console.log('--------------------------------');
console.log('Directorio home:', os.homedir());
console.log('Directorio temporal:', os.tmpdir());
console.log('CPU:', os.cpus());
console.log('Interfaces de red:', os.networkInterfaces());
console.log('--------------------------------');
console.log('Usuario actual:', os.userInfo());
console.log('--------------------------------');
console.log('Número de núcleos de CPU:', os.cpus().length);
console.log('--------------------------------');
console.log('Fin del informe del sistema operativo');