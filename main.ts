import { ServerApp } from "./src/app";
require("dotenv").config();

async function main() {
    const app = new ServerApp(3000)
    await app.settings();
    await app.routes();
    await app.listen();
}
main();