"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./presentation/server");
(async () => {
    main();
})();
async function main() {
    await server_1.Server.start();
}
();
//# sourceMappingURL=app.js.map