import express from "express";
import { Settings } from "../settings/settings";
import { methods } from "../enum/enum_method";

export class ServerApp {
    private settings: Settings;
    private app = express();

    constructor(private port: number) {
        this.settings = new Settings();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("server listening on", this.port);
        })
    }
}