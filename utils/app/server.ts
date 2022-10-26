import express from "express";
import { Settings } from "../settings/settings";
import { DataService } from "../manager/data_services";
import MySQLqlRoutes from "../../src/posts/posts_router";

export class ServerApp {
    private settings: Settings;
    private connectDb: DataService;
    private app = express();

    constructor(private port: number) {
        this.settings = new Settings();
        this.connectDb = new DataService();
    }

    routes() {
        this.app.use("/", MySQLqlRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("server listening on", this.port);
        })
    }
}