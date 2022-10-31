export class MySqlModels {
    async route(file: string) {
        let fullname = file[0].toUpperCase() + file.slice(1);
        return await
            `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${fullname});
        router.post('/', controller.post${fullname});
        router.put('/:id', controller.put${fullname});
        router.delete('/:id', controller.delete${fullname});
        
        export default router;`
    }

    async controller(file: string) {
        let fullname = file[0].toUpperCase() + file.slice(1);
        return await
            `import { Request, Response } from "express";
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
            }`
    }
}
