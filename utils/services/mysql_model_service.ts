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
            import { MySqlConnection } from "../../utils/database/mysql/mysql_db";
            
            export class mysqlController {
                constructor(private database?) {
                    this.database = new MySqlConnection().db;
                }
            
                async get${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    try {
                        // const response = await this.database.query('SELECT * FROM users');
                        // return res.json(response);
                    }
                    catch (e) {
                        console.log(e)
                    }
                }
            
                async post${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    try {
                        // const response = req.body;
                        // await this.database.query('INSERT INTO posts SET ?', [response]);
                        // res.json({
                        //     message: 'New Post Created'
                        // });
                    } catch (e) {
                        console.log(e)
                    }
                }
            
                async put${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    try {
                        // const id = req.params.postId;
                        // const response = req.body;
                        // await this.database.query('UPDATE posts set ? WHERE id = ?', [response, id]);
                        // res.json({
                        //     message: 'Post Updated'
                        // });
                    } catch (e) {
                        console.log(e)
                    }
                }
            
                async delete${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    try {
                        // const id = req.params.postId;
                        // await this.database.query('DELETE FROM posts WHERE id = ?', [id]);
                        // res.json({
                        //     message: 'Post deleted'
                        // });
                    } catch (e) {
                        console.log(e)
                    }
                }
            }`
    }


    async model(file: string) {
        return await
            `import { Schema, model } from 'mongoose';

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

        export default model('${file}Model', ${file}Model);`
    }
}
