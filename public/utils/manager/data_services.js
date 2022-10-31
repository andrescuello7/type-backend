"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const mongo_db_1 = require("../database/mongo/mongo_db");
class DataService {
    constructor() {
        // this.connection = new MySqlConnection()
        this.connection = new mongo_db_1.MongoDbConnection();
    }
}
exports.DataService = DataService;
//# sourceMappingURL=data_services.js.map