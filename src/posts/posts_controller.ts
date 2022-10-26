import { Request, Response } from "express";
import { connectMysql } from "../../utils/database/mysql/mysql_db";

export class postsController {
    async getPosts(req: Request, res: Response) {
        let connect = await connectMysql();
        const response = await connect.query('SELECT * FROM users');
        res.send(response[0]);
    }

    async postPosts(req: Request, res: Response) {
    }

    async putPosts(req: Request, res: Response) {
    }

    async deletePosts(req: Request, res: Response) {
    }
}