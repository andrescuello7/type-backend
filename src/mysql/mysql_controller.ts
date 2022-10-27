import { Request, Response } from "express";
import { connectMysql } from "../../utils/database/mysql/mysql_db";

export class mysqlController {
    async getMysql(req: Request, res: Response) {
        let connect = await connectMysql();
        const response = await connect.query('SELECT * FROM users');
        res.send(response[0]);
    }

    async postMysql(req: Request, res: Response) {
    }

    async putMysql(req: Request, res: Response) {
    }

    async deleteMysql(req: Request, res: Response) {
    }
}