import express from "express";
import { DataService } from "../utils/manager/data_services";
import bodyParser from 'body-parser'
import MySqlRoutes from "./mysql/mysql_router";
import MongoRoutes from "./mongo/mongo_router";

export class ServerApp {
    private app = express();

    constructor(private port: number) {
        new DataService();
    }

    settings() {
        this.app.set('port', process.env.PORT || 3000);
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