export class MySqlModels {
    async route(file: string) {
        return await
            `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${file[0].toUpperCase() + file.slice(1)});
        router.post('/', controller.post${file[0].toUpperCase() + file.slice(1)});
        router.put('/:idPost', controller.put${file[0].toUpperCase() + file.slice(1)});
        router.delete('/:idPost', controller.delete${file[0].toUpperCase() + file.slice(1)});
        
        export default router;`
    }

    async controller(file: string) {
        return await
            `import { Request, Response } from "express";
            import { connectMysql } from "../../utils/database/mysql/mysql_db";
            
            export class ${file}Controller {
                async get${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    let connect = await connectMysql();
                    const response = await connect.query('SELECT * FROM users');
                    res.send(response[0]);
                }
            
                async post${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                }
            
                async put${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                }
            
                async delete${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                }
            }`
    }
}
