import { Request, Response } from "express";
import { MySqlConnection } from "../../utils/database/mysql/mysql_db";

export class mysqlController {
    constructor(private database?) {
        this.database = new MySqlConnection().db;
    }

    async getMysql(req: Request, res: Response) {
        try {
            // const response = await this.database.query('SELECT * FROM users');
            // return res.json(response);
        }
        catch (e) {
            console.log(e)
        }
    }

    async postMysql(req: Request, res: Response) {
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

    async putMysql(req: Request, res: Response) {
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

    async deleteMysql(req: Request, res: Response) {
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
}