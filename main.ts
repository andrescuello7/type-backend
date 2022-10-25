import { ServerApp } from "./src/app/server";

async function main() {
    const app = new ServerApp(3000)
    await app.listen();
    await app.routes();
}
main();