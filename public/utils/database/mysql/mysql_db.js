"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMysql = exports.MySqlConnection = void 0;
const promise_1 = require("mysql2/promise");
class MySqlConnection {
    constructor() {
        try {
            (0, exports.connectMysql)();
            console.log("Connected mysql", `${process.env.NAME_DB}`);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.MySqlConnection = MySqlConnection;
const connectMysql = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = (0, promise_1.createPool)({
        host: `${process.env.HOST_DB}`,
        user: `${process.env.USER_MS}`,
        password: `${process.env.PASSWORD_MS}`,
        database: `${process.env.NAME_DB}`,
        port: 8004,
        connectionLimit: 10
    });
    return response;
});
exports.connectMysql = connectMysql;
//# sourceMappingURL=mysql_db.js.map