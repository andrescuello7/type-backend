import { App } from "./src/app";
require("dotenv").config();

async function main() {
    const app = new App()
    await app.settings();
    await app.routes();
    await app.listen();
}
main();