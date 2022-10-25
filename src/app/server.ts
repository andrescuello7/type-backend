import http from "http";
import { Routes } from "../routes/routes";
import { methods } from "../routes/e_method";

export class ServerApp {
    private router: Routes;

    constructor(private port: number, private host: string = "127.0.0.1") {
        this.router = new Routes(host, port);
    }

    listen() {
        http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Hello, world!");
        }).listen(this.port, this.host, () => console.log("server listening on", this.host, ":", this.port));
    }

    routes() {
        this.router.method("/", methods.get, () => { })
        this.router.method("/", methods.post, () => { })
        this.router.method("/", methods.put, () => { })
        this.router.method("/", methods.delete, () => { })
    }
}