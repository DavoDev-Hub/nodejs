"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const message = "Hola Mundo!";
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
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created");
//# sourceMappingURL=app.logic.js.map