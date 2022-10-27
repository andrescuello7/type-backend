import express from "express";
import bodyParser from 'body-parser'
import MySqlRoutes from "./mysql/mysql_router";
import MongoRoutes from "./mongo/mongo_router";

import { DataService } from "../utils/manager/data_services";
export class App {
    private app = express();
    private port: number = 3000;

    constructor() {
        new DataService();
    }

    settings() {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(express.json());
        this.app.use(bodyParser.json())
    }

    routes() {
        this.app.use("/api/mongo", MongoRoutes)
        this.app.use("/api/mysql", MySqlRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("server listening on", this.port);
        })
    }
}