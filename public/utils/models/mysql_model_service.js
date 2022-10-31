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
exports.MySqlModels = void 0;
class MySqlModels {
    route(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let fullname = file[0].toUpperCase() + file.slice(1);
            return yield `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${fullname});
        router.post('/', controller.post${fullname});
        router.put('/:id', controller.put${fullname});
        router.delete('/:id', controller.delete${fullname});
        
        export default router;`;
        });
    }
    controller(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let fullname = file[0].toUpperCase() + file.slice(1);
            return yield `import { Request, Response } from "express";
            import { connectMysql } from "../../utils/database/mysql/mysql_db";
            
            export class ${file}Controller {
                async get${fullname}(req: Request, res: Response) {
                    try {
                        let connect = await connectMysql();
                        const response = await connect.query('SELECT * FROM users');
                        res.send(response[0]);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method get");
                    }
                }
            
                async post${fullname}(req: Request, res: Response) {
                    try {
                        let connect = await connectMysql();
                        const response = await connect.query('INSERT INTO users set ?', req.body);
                        res.send(response[0]);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method post");
                    }
                }
            
                async put${fullname}(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        let connect = await connectMysql();
                        const response = await connect.query('UPDATE users set ? where id = ?', [req.body, id]);
                        res.send(response[0]);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method put");
                    }
                }
            
                async delete${fullname}(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        let connect = await connectMysql();
                        const response = await connect.query('DELETE FROM users WHERE id = ?', [id]);
                        res.send(response[0]);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method delete");
                    }
                }
            }`;
        });
    }
}
exports.MySqlModels = MySqlModels;
//# sourceMappingURL=mysql_model_service.js.map