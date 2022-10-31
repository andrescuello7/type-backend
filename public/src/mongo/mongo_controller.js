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
exports.mongoController = void 0;
const mongo_model_1 = __importDefault(require("./mongo_model"));
class mongoController {
    getMongo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield mongo_model_1.default.find();
                res.send(response);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method get");
            }
        });
    }
    postMongo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = new mongo_model_1.default(Object.assign(Object.assign({}, req.body), { CreateAdd: Date.now() }));
                const response = yield model.save();
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method post");
            }
        });
    }
    putMongo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const response = yield mongo_model_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method put");
            }
        });
    }
    deleteMongo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const response = yield mongo_model_1.default.findByIdAndRemove(id);
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                res.status(400).send("error in method delete");
            }
        });
    }
}
exports.mongoController = mongoController;
//# sourceMappingURL=mongo_controller.js.map