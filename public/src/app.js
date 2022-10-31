"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_router_1 = __importDefault(require("./mysql/mysql_router"));
const mongo_router_1 = __importDefault(require("./mongo/mongo_router"));
const data_services_1 = require("../utils/manager/data_services");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        new data_services_1.DataService();
    }
    settings() {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.use("/api/mongo", mongo_router_1.default);
        this.app.use("/api/mysql", mysql_router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("server listening on", this.port);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map