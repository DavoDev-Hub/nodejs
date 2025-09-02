import fs from "fs";

const message: string = "Hola Mundo!";

const base = 5;
let outputMessage = "";

const headerMessage = `
=========================
     Tabla del ${base}
=========================
`;

for (let i = 1; i < 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

const outputPath = `output`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created");
