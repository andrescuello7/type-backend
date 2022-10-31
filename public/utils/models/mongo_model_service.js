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
exports.MongoModels = void 0;
class MongoModels {
    route(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${file[0].toUpperCase() + file.slice(1)});
        router.post('/', controller.post${file[0].toUpperCase() + file.slice(1)});
        router.put('/:id', controller.put${file[0].toUpperCase() + file.slice(1)});
        router.delete('/:id', controller.delete${file[0].toUpperCase() + file.slice(1)});
        
        export default router;`;
        });
    }
    controller(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let fullName = file[0].toUpperCase() + file.slice(1);
            return yield `import ${file}Model from "./${file}_model";
            import { Request, Response } from 'express';
            
            export class ${file}Controller {
                async get${fullName}(req: Request, res: Response) {
                    try {
                        const response = await ${file}Model.find();
                        res.send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method get");
                    }
                }
            
                async post${fullName}(req: Request, res: Response) {
                    try {
                        const model = new ${file}Model({
                            ...req.body,
                            CreateAdd: Date.now(),
                        });
                        const response = await model.save();
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method post");
                    }
                }
            
                async put${fullName}(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await ${file}Model.findOneAndUpdate({ _id: id }, req.body, { new: true });
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method put");
                    }
                }
            
                async delete${fullName}(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await ${file}Model.findByIdAndRemove(id);
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method delete");
                    }
                }
            }`;
        });
    }
    model(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield `import { Schema, model } from 'mongoose';

        const ${file}Model = new Schema({
            title: {
                type: String,
                required: true,
                tim: true
            },
            CreateAdd: {
                type: Date,
                default: Date.now()
            }
        })

        export default model('${file}Model', ${file}Model);`;
        });
    }
}
exports.MongoModels = MongoModels;
//# sourceMappingURL=mongo_model_service.js.map