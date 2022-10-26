import { ServerApp } from "./utils/app/server";

async function main() {
    const app = new ServerApp(3000)
    await app.listen();
}
main();