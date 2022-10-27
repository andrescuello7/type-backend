import { ServerApp } from "./src/app";
require("dotenv").config();

async function main() {
    const app = new ServerApp()
    await app.settings();
    await app.routes();
    await app.listen();
}
main();