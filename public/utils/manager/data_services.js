"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const mysql_db_1 = require("../database/mysql/mysql_db");
class DataService {
    constructor() {
        this.connection = new mysql_db_1.MySqlConnection();
        // this.connection = new MongoDbConnection()
    }
}
exports.DataService = DataService;
//# sourceMappingURL=data_services.js.map