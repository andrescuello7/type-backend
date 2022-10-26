import express from "express";

export class Settings {
    private app = express();
    public port: number;

    //Settings
    constructor() {
        this.app.set('port', process.env.PORT || 3000);
        this.port = this.app.get('port');
    }
}