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
exports.mysqlController = void 0;
const mysql_db_1 = require("../../utils/database/mysql/mysql_db");
class mysqlController {
    getMysql(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield (0, mysql_db_1.connectMysql)();
                const response = yield connect.query('SELECT * FROM users');
                res.send(response[0]);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method get");
            }
        });
    }
    postMysql(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield (0, mysql_db_1.connectMysql)();
                const response = yield connect.query('INSERT INTO users set ?', req.body);
                res.send(response[0]);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method post");
            }
        });
    }
    putMysql(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                let connect = yield (0, mysql_db_1.connectMysql)();
                const response = yield connect.query('UPDATE users set ? where id = ?', [req.body, id]);
                res.send(response[0]);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method put");
            }
        });
    }
    deleteMysql(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                let connect = yield (0, mysql_db_1.connectMysql)();
                const response = yield connect.query('DELETE FROM users WHERE id = ?', [id]);
                res.send(response[0]);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method delete");
            }
        });
    }
}
exports.mysqlController = mysqlController;
//# sourceMappingURL=mysql_controller.js.map