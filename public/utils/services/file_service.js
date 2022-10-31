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
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const mongo_model_service_1 = require("../models/mongo_model_service");
const mysql_model_service_1 = require("../models/mysql_model_service");
const input = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const mongoModels = new mongo_model_service_1.MongoModels();
const mysqlModels = new mysql_model_service_1.MySqlModels();
const fileService = () => {
    console.log("Created new Model \n");
    console.log("[1] MongoDb name_file \n[2] MySql name_file \n");
    input.on("line", (line) => {
        let file = line.slice(2);
        let num = line[0];
        switch (num) {
            case "1":
                createModel(file, mongoModels);
                break;
            case "2":
                createModel(file, mysqlModels);
                break;
            default:
                process.exit(0);
        }
    });
};
const createModel = (file, model) => {
    fs_1.default.mkdir(`./src/${file}/`, () => __awaiter(void 0, void 0, void 0, function* () {
        if (model == mongoModels) {
            fs_1.default.writeFile(`./src/${file}/${file}_model.ts`, yield model.model(file), () => { });
        }
        fs_1.default.writeFile(`./src/${file}/${file}_router.ts`, yield model.route(file), () => { });
        fs_1.default.writeFile(`./src/${file}/${file}_controller.ts`, yield model.controller(file), () => { process.exit(0); });
    }));
};
fileService();
//# sourceMappingURL=file_service.js.map