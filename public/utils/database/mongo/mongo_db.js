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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDbConnection {
    constructor() {
        this.auth();
    }
    auth() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield mongoose_1.default.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@cluster0.qa9gg.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`);
            console.log("Connected mongo", db.connection.db.databaseName);
        });
    }
}
exports.MongoDbConnection = MongoDbConnection;
//# sourceMappingURL=mongo_db.js.map